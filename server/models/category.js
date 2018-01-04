const mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
  {
    // uniqued:true, index: true
    name: { type: String, unique: true, required: true },
    des: String,
    parent:{ type: String, ref: 'Category'},
    children: [ this ]
  },
  { timestamps: true }
);

CategorySchema.plugin(uniqueValidator);

module.exports = mongoose.model('Category',CategorySchema);
