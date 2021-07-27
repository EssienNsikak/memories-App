import mongoose from 'mongoose';

const PostSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    message: {
      type: String
    },

    creator: {
      type: String
    },

    tags: [String],

    selectedFile: {
      type: String
    },

    likeCount: {
      type: Number,
      default: 0,
    },

    createdAt: {
      type: Date,
      default: new Date(),
    },
  }
);

let Post = mongoose.model('Post', PostSchema);

export default Post;