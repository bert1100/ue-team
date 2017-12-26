
const mongoose = require('mongoose');
const Kitten = require('./models/kitty.js');
const db = mongoose.connect('mongodb://localhost:27017/chsi-ue').connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  let kitten = new Kitten({ name: 'post'});
  kitten.save((err)=> {
    if (err) {
        console.log(err)
    } else {
        console.log("save success")
    }
  });
  console.log('db conncted success!')
})
