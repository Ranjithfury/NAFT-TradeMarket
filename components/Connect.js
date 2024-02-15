import {useContext, useCallback, createContext} from "react";
import { Web3ModalContext } from '../contexts/Web3ModalProvider';
import styles from "../components/Navbar.module.css";


const Connect = () => {

    function ellipseAddress(
        address,
        width) {
        return `${address?.slice(0, width + 2)}...${address?.slice(-width)}`;
      }
    
      const { account, connect, disconnect } = useContext(Web3ModalContext);
    

      console.log(account);
    
      console.log(account);
      const handleConnectWallet = useCallback(() => { // Callback to handle Wallet Connection
        console.log("called");
        connect();

      }, [connect]);
    
      const handleDisconnectWallet = useCallback(() => {  // Callback to handle Wallet Disconnection
        disconnect();
        window.location.reload();
      }, [disconnect]);

    return (
     !account ? 
        (<button className={styles.signupButton} onClick={() => {handleConnectWallet()}}>Connect Wallet</button>):  // If no account was found, it shows this
        (<button className={styles.signupButton} onClick={() => {handleDisconnectWallet(), window.location.reload()}}>{ellipseAddress(account)}</button>) // Else it shows the Address
    
    )
}


export default Connect;