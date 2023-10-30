const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    data: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
