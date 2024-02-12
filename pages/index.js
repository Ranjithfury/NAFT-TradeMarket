import React from 'react';
import Footer from "../components/footer/Footer"
import Connect from '../components/Connect';
import Web3ModalProvider from '../contexts/Web3ModalProvider';

const HomePage = () => {
  return (
    <div>
          <Web3ModalProvider>
            <Connect />
            </Web3ModalProvider>
              <h1 style={{ color: 'white' }}>Welcome to Next.js!</h1>
              <p style={{ color: 'white' }}>This is the home page.</p>
              <Footer/>
    </div>
  );
};

export default HomePage;
