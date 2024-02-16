
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { ethers, JsonRpcProvider } = require("ethers");
const mongoose = require('mongoose');
const NFT = require("./schemas/NFT");
const User = require("./schemas/User");
const abiData = require("./abi.json");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001; 
const mongoURI = 'your_mongodb_atlas_uri'; 

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(express.json());
app.use(cors());

const provider = new JsonRpcProvider(process.env.APOTHEM_NETWORK_URL);

const nftContract = new ethers.Contract(process.env.NFT_CONTRACT_ADDRESS, abiData.nft_abi, provider);
const userContract = new ethers.Contract(process.env.USER_CONTRACT_ADDRESS, abiData.user_abi, provider);


mongoose
  .connect(
    "mongodb+srv://ranj74384:admin2020@demo.z8hcj5m.mongodb.net/market",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

  app.get('/api/example', (req, res) => {
    res.json({ message: 'This is an example API endpoint' });
  });

  app.get("/api/yourNFTs", async(req, res) => {
    try {

      const address =  req.query.address;
      let nftIDs = [];
      let nftDetails = [];
      console.log(address);

      const thatUser = await User.findOne({walletAddress: address});
      if(thatUser) {
        thatUser.ownedNFTs.forEach((nft) => {
        

          nftIDs.push(nft.nftID);
        })
      }

      const nfts = await NFT.find({nftID: nftIDs});
      
      res.send(nfts);
      

    } catch(error) {
      console.log("Unable to fetch your NFTs ", error);
    }
  })


  
  app.post("/api/mintNFT", async(req, res) => {
    try {
      const totTokens = req.body.tokens;
      const nftPrice = req.body.price;
      const nftData = req.body.nftData;
      const nftDesc = req.body.description;
      const nftTitle = req.body.title;
      const nftOwner = req.body.owner;

      console.log(nftData);

      const nfts = await NFT.find({});

      const insertNFT = await NFT.create({
        nftID: nfts.length+1,
        ownerAddress: nftOwner,
        nftTitle: nftTitle,
        nftDesc: nftDesc,
        nftPrice: nftPrice,
        nftTokens: totTokens, 
        nftType: "Image",
        nftData: nftData
      });

      insertNFT.save();

      const checkUser = await User.findOne({walletAddress: nftOwner});
      const allUser = await User.find({});
      if(!checkUser) {

        const newUser = await User.create({
          userID: allUser.length+1,
          walletAddress: nftOwner,
          ownedNFTs: [ {
            nftID: nfts.length+1,
            tokens: totTokens,
          }],
          boughtNFTs: 1,
        })

        newUser.save();
      } else {
        console.log(checkUser);
        const existingNFTs = checkUser.ownedNFTs

        console.log(existingNFTs);
        const modify = await User.updateOne({walletAddress: nftOwner}, {ownedNFTs: [...existingNFTs, {
          nftID: nfts.length+1,
          tokens: totTokens,
        }]});


      }

      const mintInContract  = await nftContract.mintNFT(process.env.DUMMY_WALLET_ADDRESS,nftOwner, nftTitle, nftDesc, nftPrice, totTokens, nftData); // Need to get hold of Account ID in order to proceed further

      console.log("NFT minted successfully");

    } catch(error) {
      console.error("Error in minting NFT", error);
    }
  })


  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });