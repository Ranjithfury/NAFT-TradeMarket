// pages/index.js
import React from 'react';
import { Grid } from '@mui/material';
import Card from './Card';
import styles from './newProduct.module.css'; 

const NewProduct = () => {
  const handleBuy = () => {
    // Handle buy button click
    console.log('Buy button clicked');
  };

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
