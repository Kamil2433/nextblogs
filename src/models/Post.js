import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        comments:{
    type:[String]

        },
        image:{
        type: String
        }
    },
    {
        timestamps: true
    }
);

const Post = mongoose.models.posts || mongoose.model("posts", postSchema);
export default Post;