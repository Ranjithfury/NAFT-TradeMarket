const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userID: {
        type: Number,
    },

    ownedNFTs: {
        type: [Number],
    },

    boughtNFTs: {
        type: Number,
        default: 0,
    },

    soldNFTs: {
        type: Number,
        default: 0
    },

})

const User = mongoose.model("User", userSchema);

module.exports = User;