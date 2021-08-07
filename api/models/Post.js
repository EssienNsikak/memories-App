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

    tags: [String],

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