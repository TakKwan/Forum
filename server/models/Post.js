const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema(
  {
    userID: { type: Schema.Types.ObjectId, required: false },
    content: { type: String, required: true, index: 'text' },
    date: { type: Date, required: true }
  },
  { timestamps: true }
)

module.exports = PostSchema
