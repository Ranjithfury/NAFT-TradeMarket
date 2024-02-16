const mongoose = require("mongoose");

const nftSchema = new mongoose.Schema({
    nftID: {
        type: Number,
        required: true,
    },
    ownerAddress: {
        type: String,
        required: true,
    },

    nftTitle: {
        type: String,
        required: true,
    },

    nftPrice: {
        type: Number,
        required: true,
    },

    nftTokens: {
        type:Number,
        required: true,
    },

    nftDesc: {
        type: String,
        required: true,
    },

    nftType: {
        type: String,
        required: true,
    },

    nftData: {
        type: [Number],
        required: true,
    }
})

const NFT = mongoose.model("NFT", nftSchema);

module.exports = NFT;