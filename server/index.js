const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();
// const User = require('./models/user'); //deleted after test!
// 开通静态访问目录，以便图片可以显示
app.use("/public",express.static(path.join(__dirname,'public')));
app.use(cors());
app.use(bodyParser.json());
app.use(router);

// 准备写前置验证器：originalUrl含有／admin的会执行一下方法
router.use('/admin',function(req,res,next) {
  console.log(req.originalUrl);
  next();
})


mongoose.connect('mongodb://localhost:27017/chsi-ue',{ useMongoClient: true });
// 消除警告信息，使用nodejs的promise，见官方文档
mongoose.Promise = global.Promise;

const  db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open',function() {
//   let weij = new User({
//     username: 'weij',
//     password: '123456',
//     email:'wej@chsi.com.cn'
//   });
//   weij.save();
// })

const routes = require("./routes");
routes(app);

app.listen(3000, () => {
  console.log('running on port 3000')
})
