// components/navbar.js

import styles from './Navbar.module.css';
import Link from 'next/link';
import Connect from '../components/Connect';
import Web3ModalProvider from '../contexts/Web3ModalProvider';



const Navbar = () => {
  return (
    <div class="container">
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
        <img src="/images/logo.png" alt="Logo" width="100%" height="auto" display="block"/>
        </Link>
      </div>
      <ul className={styles.menu}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about-us">Create</Link></li>
        <li><Link href="#">Collections</Link></li>
        <li><Link href="#">About</Link></li>
        <li><Link href="#">Contact</Link></li>
        <li><Link href="#">Wallet</Link></li>
      </ul>
      <div className={styles.actions}>

        <input type="text" placeholder="Search" className={styles.feild} />
          <Web3ModalProvider>
            <Connect />
          </Web3ModalProvider>
      </div>
    </nav>
    </div>
    
  );
};

export default Navbar;
