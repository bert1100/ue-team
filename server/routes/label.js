const Label = require('../models/label');

module.exports = (app) =>{
// 查询集合
app.get('/labels',(req, res) => {
  Label.find().sort({'createdAt': -1}).exec((err, labels) => {
    if(err) return res.status(500).json({error: err.message})
    res.json({ labels })
  })
})

// 查询单条记录
app.get('/labels/:id', (req, res) => {
  Label.find({_id: req.params.id}).exec((err,label) => {
    if(err) return res.status(500).json({error: err.message})
    res.json({ label })
  })
})

// 创建新记录
app.post('/labels', (req, res) => {

  let label = new Label(req.body);
  label.save((err) => {
    if(err) console.log(err)
    res.json({ label })
  })
})

// 更新记录
app.put('/labels/:id', (req,res) => {
  if(req.body.name ==='') return res.status(400).json({error:'类别名称不能为空'});
  Label.findById({_id: req.params.id }).exec((err,label) => {
    if(err) return res.status(500).json({ error : err.message })
    for( pro in req.body){
      label[pro] = req.body[pro]
    }
    label.save((err) => {
      if(err) console.log(err)
      res.json({ messages: 'updated success!'})
    })
  })
})

// 删除一条记录
app.delete('/labels/:id', (req, res) => {
  Label.findById({_id: req.params.id }).exec((err,label) => {
    if(err) return res.status(500).json({ error: err.message })
    label.remove((err) => {
      if(err) return res.status(500).json({ error: err.message })
      res.json({ messages:"deleted success!"})
    })
  })
})

}
