import React, {useState, useEffect, useContext} from "react";
import { Web3ModalContext } from "../contexts/Web3ModalProvider";
import axios from "axios";
import styles from './newProduct.module.css'; 
import { Grid } from '@mui/material';
import ColleCard from './ColleCard';


const Collections = () => {

    const {account} = useContext(Web3ModalContext);
    const [nftData, setNFTData] = useState([]);
    const [imageList, setImageData] = useState([]);
    console.log(account);

    console.log(imageList);
    async function execApi() {
        try {
            const response = await axios.get(`http://localhost:3001/api/yourNFTs`, {params: {
                address: account
            }} );

            setNFTData(response.data);


        } catch(error) {
            console.log("Unable to fetch your NFTs " , error);
        }
    }

    async function handleBuy(team) {
        console.log("Hey");
    }

    const convertArrayBufferToImage = (arrayBuffer) => {
        const blob = new Blob([new Uint8Array(arrayBuffer)], { type: 'image/jpeg' });
        const url = URL.createObjectURL(blob);
        return url;
      };

    useEffect(() => {
        execApi();
        let imageData = [];
        nftData.forEach((nft) => {

            const resp = convertArrayBufferToImage(nft.nftData);
            imageData.push(resp);
        })

        console.log(imageData);
        setImageData(imageData);
      }, []);
    
      console.log(imageList);



    return (
        <div style={{ backgroundColor: 'hsl(0, 0%, 7%)', width: '100%',padding: "120px 0" }}>
        <div class ="container">
        <div className='section-header-wrapper'>

      <h1 style={{color: "white"}}>Your Collections</h1>

      </div>  
      <Grid container spacing={8} style={{color: "white"}}>
      
      { nftData.map((nft, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={3} >
          <ColleCard
            imgSrc={imageList[index]}
            title={nft.nftTitle}
            description={nft.nftDesc}
            price={nft.nftPrice}
            onBuy={handleBuy}
            left={nft.nftTokens}
          />
        </Grid>
      ))
      }

      </Grid>
      {nftData.length == 0 && 
        (<h2 style={{color: "hsl(47, 100%, 49%)"}}>No NFTs present in your Collections</h2>)}
      </div>
    </div>

    )

}

export default Collections;