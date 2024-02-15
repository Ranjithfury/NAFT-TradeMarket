// components/Layout.js

import { useRouter } from 'next/router';
import Web3ModalProvider from '../contexts/Web3ModalProvider';
import { Web3ModalContext } from '../contexts/Web3ModalProvider';
import { useContext } from 'react';
import Navbar from './navbar';

const Layout = ({ children }) => {
  const router = useRouter();

  // Conditionally render Navbar based on the route
  const excludeNavbarFromPages = ['/signin', '/login'];
  const showNavbar = !excludeNavbarFromPages.includes(router.pathname);

  return (
    <div >
      <Web3ModalProvider>
        {showNavbar && <Navbar />}
        {children}
      </Web3ModalProvider>
    </div>
  );
};

export default Layout;
