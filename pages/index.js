import React, {useState, useContext} from 'react';
import Footer from "../components/footer/Footer"
import Connect from '../components/Connect';
import { Web3ModalContext } from '../contexts/Web3ModalProvider';
import Web3ModalProvider from '../contexts/Web3ModalProvider';
import { Grid } from '@mui/material';
import NewProduct from '../components/NewProduct';


const HomePage = () => {

  const { account, connect, disconnect } = useContext(Web3ModalContext);



  return (
    <div>
      <div className="line"></div>
    <div class="container">
    <Grid container spacing={2} style={{ padding: '100px 0' }}>
      <Grid item xs={8}lg={6} className="hero">

              <h1 style={{ color: 'white' }}>Invest In Digital Assets</h1>
              <h1 style={{ color: 'white' }}>Buy/Sell your <span className="heroTitleSpan">NFT</span></h1>
              <h1 style={{ color: 'white' }}>Ownership</h1>
              <p style={{ color: 'white' }}>Discover, Invest, Collect :</p>
              <p style={{ color: 'white' }}>Your Journey into Digital Ownership Begins With Us</p>

         <Web3ModalProvider>
         <Connect />
      </Web3ModalProvider> : 
      
      <button className="btnsec">Explore Now</button>
      </Grid>
      <Grid item xs={8}lg={6}>  
        {/* Images go here */}
        <img src="/image1.jpg" alt="Image 1" />
        <img src="/image2.jpg" alt="Image 2" />
      </Grid>
    </Grid>
    
    </div>
    <NewProduct/>
      <Footer/>
    </div>
  );
};

export default HomePage;
