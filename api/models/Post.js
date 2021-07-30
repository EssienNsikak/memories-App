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

    name: {
      type: String
    },

    creator: {
      type: String
    },

    tags: {
      type: Array
    },

    selectedFile: {
      type: String
    },

    likes: { 
      type: [String], 
      default: [] 
    },

    createdAt: {
      type: Date,
      default: new Date(),
    },
  }
);

let Post = mongoose.model('Post', PostSchema);

export default Post;