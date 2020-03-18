const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        id: Number,
        email: String
    },
    {
        timestamps: true
    });

module.exports = mongoose.model("User", UserSchema);