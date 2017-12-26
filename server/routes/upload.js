const multer = require('multer');

// 指定上传路径
const uploads = multer({
  dest:'./public/uploads',
  limits: {
    // 文件上传限制大小为10MB
    fileSize: 10240000
  }
});


module.exports = (app) =>{
// // 查询集合
// app.get('/uploads',(req, res) => {
//   User.find().sort({'createdAt': -1}).exec((err, users) => {
//     if(err) return res.status(500).json({error: err.message})
//     res.json({ users })
//   })
// })
//
// // 查询单条记录
// app.get('/uploads/:id', (req, res) => {
//   User.find({_id: req.params.id}).exec((err,user) => {
//     if(err) return res.status(500).json({error: err.message})
//     res.json({ user })
//   })
// })

// 创建新记录
app.post('/uploads',uploads.any(), (req, res) => {
  if(req.files){
    res.json( req.files )
  }else {
    res.json({ error: 'upload failed!'})
  }

})



}
