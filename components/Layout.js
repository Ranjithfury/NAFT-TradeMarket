// components/Layout.js

import { useRouter } from 'next/router';
import Navbar from './navbar';

const Layout = ({ children }) => {
  const router = useRouter();

  // Conditionally render Navbar based on the route
  const excludeNavbarFromPages = ['/signin', '/login'];
  const showNavbar = !excludeNavbarFromPages.includes(router.pathname);

  return (
    <div >
      {showNavbar && <Navbar />}
      {children}
    </div>
  );
};

export default Layout;
