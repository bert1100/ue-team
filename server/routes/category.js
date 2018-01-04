const Category = require('../models/category');

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

// 创建新记录
app.post('/categories', (req, res) => {
  let category = new Category(req.body);
    // 逻辑：应当先检查是否有重复，然后再更新
  category.save((err,cat)=>{
      if(err) return res.json({error: err.message})
      if(category.parent != ''){
        Category.findByIdAndUpdate(category.parent,{$push: {children: category.id}}, {new: true}, function(err, doc) {
          if(err){ return res.json({error: err.message}); }
        });
      }
        res.json({ cat })
  })


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
    if(err) return res.status(500).json({ error: err.message })
    category.remove((err) => {
      if(err) return res.status(500).json({ error: err.message })
      res.json({ messages:"deleted success!"})
    })
  })
})


// 查询子类: will be del---
app.get('/:name/categories/', (req, res) => {
  Category.findOne({name: req.params.name}).populate('children').exec((err,category) => {
      if(err) return res.status(500).json({ error : err.message })
      res.json(category)
  })
})



}
