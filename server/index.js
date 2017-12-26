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



mongoose.connect('mongodb://localhost:27017/chsi-ue');

const  db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   let category = new Category({ name: 'post', des:'文章'});
//   category.save((err) => {
//     if(err) console.log(err)
//   })
//   console.log('db conncted success!')
// })

const routes = require("./routes");
routes(app);

app.listen(3000, () => {
  console.log('running on port 3000')
})
