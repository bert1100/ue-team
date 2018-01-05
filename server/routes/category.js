const Category = require('../models/category');
const jwt = require('jsonwebtoken');
const secret = require('../config.js').jwtsecret;

const requireAuth = function(req, res, next) {
  let token = req.headers.authorization;
  if(token){
    jwt.verify(token, secret, function(err, decoded) {
      if(err){
        if(err.name == 'TokenExpiredError') {
          return res.status(401).json({error: '认证失效，请重新登录！'})
        }else {
          return res.status(401).json({error: '认证失败！'})
        }
      } else {
        next();
      }
    })
  }else {
    return res.status(403).json({error: '认证失败，请重新登录！'})
  }
}

module.exports = (app) =>{
// 查询集合
app.get('/categories',(req, res) => {
  Category.find({parent:null}).populate("children").sort({'createdAt': -1}).exec((err, categories) => {
    if(err) return res.status(500).json({error: err.message})
    res.json({ categories })
  })
})


// 查询集合 : will be delete
app.get('/categories-all',(req, res) => {
  Category.find().sort({'createdAt': -1}).exec((err, categories) => {
    if(err) return res.status(500).json({error: err.message})
    res.json({ categories })
  })
})

// 查询单条记录
app.get('/categories/:id', (req, res) => {
  Category.find({_id: req.params.id}).exec((err,category) => {
    if(err) return res.status(500).json({error: err.message})
    res.json({ category })
  })
})


// if(category.parent != ''){
//   Category.findByIdAndUpdate(category.parent,{$push: {children: category.id}}, {new: true}, function(err, doc) {
//     if(err){ return res.json({error: err.message}); }
//   });
// }
// 创建新记录
app.post('/categories',requireAuth, (req, res) => {
  let category = new Category(req.body);
    // 逻辑：应当先检查是否有重复，然后再更新
  category.save()
  .then(cat => {
    if(cat.parent != ''){
      return Category.findByIdAndUpdate(cat.parent,{$push: {children: cat.id}}, {new: true})
    }
    else {
      return cat
    }
  }, error => {
    return error;
  })
.then(o => {
  return category
}, e => {
  category.remove();
 return e;
})
  .then(category => res.json({category}))
  .catch(err => res.json({error: err.message }))


})

// 更新记录
app.put('/categories/:id', (req,res) => {
  if(req.body.name ==='') return res.status(400).json({error:'类别名称不能为空'});
  Category.findById({_id: req.params.id }).exec((err,category) => {
    if(err) return res.status(500).json({ error : err.message })
    for( pro in req.body){
      category[pro] = req.body[pro]
    }
    category.save((err) => {
      if(err) console.log(err)
      res.json({ messages: 'updated success!'})
    })
  })
})

// 删除一条记录
app.delete('/categories/:id', (req, res) => {


  Category.findById({_id: req.params.id }).exec((err,category) => {
    if(err) return err
    return category
  })
  .then(category => {
    if(category.parent != ''){
       return  Category.findByIdAndRemove(category.id)
    }
    else{
      throw new Error('cannot delete the top category!');
    }
  }, error => {
    return error;
  })
  .then(cat =>{
    return Category.findByIdAndUpdate(cat.parent,{ $pull: {children: {$in: [cat.id] } } }, {new: true})
  },er =>{
    return error;
  })
  .then(ok => res.json({ messages:"deleted success!"}))
  .catch(err => res.status(500).json({error: err.message }))

})


// 查询子类: will be del---
app.get('/:name/categories/', (req, res) => {
  Category.findOne({name: req.params.name}).populate('children').exec((err,category) => {
      if(err) return res.status(500).json({ error : err.message })
      res.json(category)
  })
})



}
