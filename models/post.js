const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"  // Updated to "User" to match the model name
    },
    date: {
        type: Date,
        default: Date.now
    },
    content: String,
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"  // Updated to "User" to match the model name
    }]
});

module.exports = mongoose.model("post", postSchema);  // Updated to "Post"
