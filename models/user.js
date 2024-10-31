const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/miniproject1");

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    age: Number,
    password: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "post"  // Updated to "Post" to match the model name
    }]
});

module.exports = mongoose.model("user", userSchema);  // Updated to "User"
