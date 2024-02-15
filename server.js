
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { ethers, JsonRpcProvider } = require("ethers");
const mongoose = require('mongoose');
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
    "mongodb+srv://ranj74384:admin2020@demo.z8hcj5m.mongodb.net/",
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
  
  app.post("/api/mintNFT", async(req, res) => {
    try {
      const totTokens = req.body.tokens;
      const nftPrice = req.body.price;
      const nftData = req.body.nftData;
      const nftDesc = req.body.description;
      const nftTitle = req.body.title;
      const nftOwner = req.body.owner;


      // const mintInContract  = await nftContract.mintNFT() // Need to get hold of Account ID in order to proceed further

      

    } catch(error) {
      console.error("Error in minting NFT");
    }
  })


  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });