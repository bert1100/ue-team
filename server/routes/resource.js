const Resource = require('../models/resource');
const Category = require('../models/category');
let paginate_options = {
  select: "_id updatedAt owner labels contributors title category",
  populate:"category owner labels",
  sort: {'createdAt': -1},
  page : 1,
  limit :10
}

module.exports = (app) =>{
// 查询集合
app.get('/resources',(req, res) => {
  Resource.find().populate({ path:'category', select:'name des', model: 'Category'}).populate({ path:'owner', select:'name email', model:'User'}).populate({ path:'labels', select:'name des color', model:'Label'}).sort({'createdAt': -1}).exec((err, resources) => {
    if(err) return res.status(500).json({error: err.message})
    res.json({ resources })
  })
})

// 查询单条记录
app.get('/resources/:id', (req, res) => {
  Resource.find({_id: req.params.id}).populate('category').populate('owner').populate('labels').exec((err,resource) => {
    if(err) return res.status(500).json({error: err.message})
    res.json({ resource })
  })
})

// 创建新记录
app.post('/resources', (req, res) => {
  let resource = new Resource(req.body);
  resource.save((err) => {
    if(err) console.log(err)
    res.json({ resource })
  })
})

// 更新记录
app.put('/resources/:id', (req,res) => {
  if(req.body.category ==='') return res.status(400).json({error:'类别名称不能为空'});
  Resource.findById({_id: req.params.id }).exec((err,resource) => {
    if(err) return res.status(500).json({ error : err.message })
    for( pro in req.body){
      resource[pro] = req.body[pro]
    }
    resource.save((err) => {
      if(err) console.log(err)
      res.json({ messages: 'updated success!'})
    })
  })
})

// 删除一条记录
app.delete('/resources/:id', (req, res) => {
  Resource.findById({_id: req.params.id }).exec((err,resource) => {
    if(err) return res.status(500).json({ error: err.message })
    resource.remove((err) => {
      if(err) return res.status(500).json({ error: err.message })
      res.json({ messages:"deleted success!"})
    })
  })
})

// 查询子类下所有的文章列表
app.get('/:name/resources/', (req, res) => {
  Category.findOne({name: req.params.name}).exec((err,category) => {
    // console.log(category)
    if(category){
      paginate_options.page = parseInt(req.query["current"]) || 1;
      paginate_options.limit = parseInt(req.query["page-size"]) || 10;
      let ids = category.children;
        ids.push(category.id)
        Resource.paginate({"category":ids}, paginate_options).then(function(result) {
          res.json(result)

      })
        // Resource.find({"category":category.id}).populate({ path:'category', select:'name des', model: 'Category'}).populate({ path:'owner', select:'name email', model:'User'}).populate({ path:'labels', select:'name des color', model:'Label'}).sort({'createdAt': -1}).exec((err, resources) => {
        //   if(err) return res.status(500).json({error: err.message})
        //   res.json({ resources })
        // })

    }else{
      res.json([])
    }
  })
})



// 测试分页
app.get('/:name/res/',(req, res) =>{
  Category.findOne({name: req.params.name}).exec((err,category) => {
    // console.log(category)
    if(category){
      paginate_options.page = parseInt(req.query["current"]) || 1;
      paginate_options.limit = parseInt(req.query["page-size"]) || 10;

      Category.find({}).distinct("_id",{"parent":category.id}).exec((error,ids) =>{
        ids.push(category.id)
        Resource.paginate({"category":ids}, paginate_options).then(function(result) {
          res.json(result)
        })
      })

        // Resource.find({"category":category.id}).populate({ path:'category', select:'name des', model: 'Category'}).populate({ path:'owner', select:'name email', model:'User'}).populate({ path:'labels', select:'name des color', model:'Label'}).sort({'createdAt': -1}).exec((err, resources) => {
        //   if(err) return res.status(500).json({error: err.message})
        //   res.json({ resources })
        // })

    }else{
      res.json([])
    }
  })
})


}
