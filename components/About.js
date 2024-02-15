import { Grid } from '@mui/material';

const AboutUs = () => {
    return (
      <div className="container">
        <h2 className="h2 about-title">Create and sell your NFTs</h2>
        <Grid container spacing={2} style={{color: "white",marginBottom:"100px"}}>
        <Grid item xs={12} sm={6} md={4} lg={3} >
          <li className="about-item">
            <div className="about-card">
              <div className="card-number">01</div>
              <div className="card-icon">
                <img src="/images/single-create-sell-item-1.png" alt="wallet icon" />
              </div>
              <h3 className="h3 about-card-title">Set up Your Wallet</h3>
              <p className="about-card-text">
                Connect your XDC wallet to MetaMask, then log in to our website and link your wallet with us.There are many variations of passagi Ipsum available but the majorty 
              </p>
            </div>
          </li>
          </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <li className="about-item">
            <div className="about-card">
              <div className="card-number">02</div>
              <div className="card-icon">
                <img src="/images/single-create-sell-item-2.png" alt="collection icon" />
              </div>
              <h3 className="h3 about-card-title">Create Your Collection</h3>
              <p className="about-card-text">
                    After successful login, you can turn your assets such as arts, photos, music/video copyrights, and real estate properties into NFTs Ipsum available but the majorty Ipsum            </p>
            </div>
          </li>
          </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <li className="about-item">
            <div className="about-card">
              <div className="card-number">03</div>
              <div className="card-icon">
                <img src="/images/single-create-sell-item-3.png" alt="folder icon" />
              </div>
              <h3 className="h3 about-card-title">Add Your NFT's</h3>
              <p className="about-card-text">
              To mint the NFT, you need to provide necessary information required to validate your asset ownership, including price, number of tokens, title, and other details.              </p>
            </div>
          </li>
          </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <li className="about-item">
            <div className="about-card">
              <div className="card-number">04</div>
              <div className="card-icon">
                <img src="/images/single-create-sell-item-4.png" alt="diamond icon" />
              </div>
              <h3 className="h3 about-card-title">Buy/Sell Your NFT's</h3>
              <p className="about-card-text">
              Now you can sell your tokenized minted NFTs to people interested in investing in your product, and you can also buy other tokens to invest in their assets.              </p>
            </div>
          </li>
          </Grid>
          </Grid>
      </div>
    );
  };
  
  export default AboutUs;
  