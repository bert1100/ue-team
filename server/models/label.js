const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const LabelSchema = new Schema(
  {
    name: { type: String, required: true},
    des: String,
    color: String
  },
  { timestamps: true }
)

module.exports = mongoose.model('Label',LabelSchema);
