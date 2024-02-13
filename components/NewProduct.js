// pages/index.js
import React from 'react';
import { Grid } from '@mui/material';
import Card from './Card';

const NewProduct = () => {
  const handleBuy = () => {
    // Handle buy button click
    console.log('Buy button clicked');
  };

  return (
    <div style={{ backgroundColor: 'hsl(0, 0%, 7%)', width: '100%',padding: "120px 0" }}>
        <div class ="container">
      <h1>Product Catalog</h1>
      <Grid container spacing={2} style={{color: "white"}}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            imgSrc="/images/explore-product-1.jpg"
            title="Product 1"
            price="$10"
            onBuy={handleBuy}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            imgSrc="/images/explore-product-4.jpg"
            title="Product 2"
            price="$20"
            onBuy={handleBuy}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            imgSrc="/images/explore-product-3.jpg"
            title="Product 3"
            price="$10"
            onBuy={handleBuy}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card
            imgSrc="/images/explore-product-4.jpg"
            title="Product 4"
            price="$20"
            onBuy={handleBuy}
          />
        </Grid>
      </Grid>
      </div>
    </div>
  );
}

export default NewProduct;
