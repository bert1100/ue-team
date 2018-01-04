const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
// 开通静态访问目录，以便图片可以显示
app.use("/public",express.static(path.join(__dirname,'public')));
app.use(cors());
app.use(bodyParser.json());



mongoose.connect('mongodb://localhost:27017/chsi-ue',{ useMongoClient: true });
// 消除警告信息，使用nodejs的promise，见官方文档
mongoose.Promise = global.Promise;

const  db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));


const routes = require("./routes");
routes(app);

app.listen(3000, () => {
  console.log('running on port 3000')
})
