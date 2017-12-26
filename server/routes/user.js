const User = require('../models/user');

module.exports = (app) =>{
// 查询集合
app.get('/users',(req, res) => {
  User.find().sort({'createdAt': -1}).exec((err, users) => {
    if(err) return res.status(500).json({error: err.message})
    res.json({ users })
  })
})

// 查询单条记录
app.get('/users/:id', (req, res) => {
  User.find({_id: req.params.id}).exec((err,user) => {
    if(err) return res.status(500).json({error: err.message})
    res.json({ user })
  })
})

// 创建新记录
app.post('/users', (req, res) => {
  console.log( 'POST ／users', req.body);

  let user = new User(req.body);
  user.save((err) => {
    if(err) console.log(err)
    res.json({ user })
  })
})

// 更新记录
app.put('/users/:id', (req,res) => {
  if(req.body.name ==='') return res.status(400).json({error:'类别名称不能为空'});
  User.findById({_id: req.params.id }).exec((err,user) => {
    if(err) return res.status(500).json({ error : err.message })
    for( pro in req.body){
      user[pro] = req.body[pro]
    }
    user.save((err) => {
      if(err) console.log(err)
      res.json({ messages: 'updated success!'})
    })
  })
})

// 删除一条记录
app.delete('/users/:id', (req, res) => {
  User.findById({_id: req.params.id }).exec((err,user) => {
    if(err) return res.status(500).json({ error: err.message })
    user.remove((err) => {
      if(err) return res.status(500).json({ error: err.message })
      res.json({ messages:"deleted success!"})
    })
  })
})

}
