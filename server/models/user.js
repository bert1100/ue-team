const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const UserSchema = new Schema(
  {
    name: { type: String, required: true},
    email: String,
    des: String
  },
  { timestamps: true }
)

module.exports = mongoose.model('User',UserSchema);
