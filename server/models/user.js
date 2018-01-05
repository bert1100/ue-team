const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const UserSchema = new Schema(
  {
    username: { type: String, unique: true, required: true},
    password: { type: String, required: true },
    name: { type: String, default: '昵称'},
    email: String,
    des: String
  },
  { timestamps: true }
)

UserSchema.pre('save',function(next){
  var user = this, Salt_factor = 5;
  bcrypt.genSalt(Salt_factor,function(err,salt) {
    if(err) return next(err);
    bcrypt.hash(user.password, salt, function(err,hash){
      if(err) return next(err);
      user.password = hash;
      next();
    })
  })
})

UserSchema.methods.comparePassword = function(pwd,cb) {
// pwd 为用户传递过来的密码
bcrypt.compare(pwd,this.password,function(err, isMatch) {
  if(err) { return cb(err); }
  cb(null,isMatch)
})
}


module.exports = mongoose.model('User',UserSchema);
