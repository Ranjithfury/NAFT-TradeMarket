// pages/index.js
import React, {useState, useEffect, useContext,} from 'react';
import { Web3ModalContext } from '../contexts/Web3ModalProvider';
import { Grid } from '@mui/material';
import Card from './Card';
import axios from "axios";
import styles from './newProduct.module.css'; 


// Get all NFTs that are bought with an API

const NewProduct = () => {
  const handleBuy = () => {
    // Handle buy button click
    console.log('Buy button clicked');
  };

  const {account} = useContext(Web3ModalContext);

  const fetchMyNFT = async(account) => {
    try {
      const response = await axios.get("http://localhost:3001/api/yourNFTs", {params: {
        address: account
      }});
    } catch(error) {
      console.log("Unable to fetch your NFTs ", error);
    }
  }

  useEffect(() => {
    (async () => {
      await fetchMyNFT(account);
    })
  }, [account]);

  return (
    <div style={{ backgroundColor: 'hsl(0, 0%, 7%)', width: '100%',padding: "120px 0" }}>
        <div class ="container">
        <div className='section-header-wrapper'>

      <h2 >Newest Items</h2>
      <button className={styles.signupButton}>VIEW ALL</button>

      </div>  
      <Grid container spacing={8} style={{color: "white"}}>
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <Card
            imgSrc="/images/new-item-1.jpg"
            title="Product 1"
            price="210"
            onBuy={handleBuy}
            left="9"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            imgSrc="/images/new-item-2.jpg"
            title="Product 2"
            price="60"
            onBuy={handleBuy}
            left="25"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            imgSrc="/images/new-item-3.jpg"
            title="Product 3"
            price="400"
            onBuy={handleBuy}
            left="13"

          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            imgSrc="/images/new-item-4.jpg"
            title="Product 4"
            price="100"
            onBuy={handleBuy}
            left="4"

          />
        </Grid>
      </Grid>
      </div>
    </div>
  );
}

export default NewProduct;
