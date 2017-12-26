const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

const ResourceSchema = new Schema(
  {
    category: { type: ObjectId, default: "5a1bd08442444d07dc96a21b", ref: "Category", required: true },
    title:{ type: String, default: '标题...', required: true },
    content: { type: String, default: "" },
    contentHTML: { type: String, default: '' },
    contentImgs:[ String ],
    owner: { type: ObjectId, ref: "User" },
    contributors:[{
        type: ObjectId,
        ref: "User"
      }],
    labels:[{
      type: ObjectId,
      ref: "Label"
    }]
  },
  { timestamps: true }
)


ResourceSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Resource',ResourceSchema);
