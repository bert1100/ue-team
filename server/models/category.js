const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
  {
    name: { type: String, required: true},
    des: String,
    parent:{ type: String, ref: 'Category'},
    children: [ this ]
  },
  { timestamps: true }
)

module.exports = mongoose.model('Category',CategorySchema);
