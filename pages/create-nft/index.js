import React, {useContext, useState} from "react";
import { Web3ModalContext } from '../../contexts/Web3ModalProvider';
import Web3ModalProvider from "../../contexts/Web3ModalProvider";
import Connect from "../../components/Connect";
import styles from "../../components/Navbar.module.css";
import axios from "axios";

const Create = () => {
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();
    const [price, setPrice] = useState(0);
    const [token, setToken] = useState(0);
    const [data, setData] = useState();

    const {account} = useContext(Web3ModalContext);

    console.log(account);


    async function mintNFT(tit, des, pri, tok, data) {
        try {
            const response = await axios.post("/api/mintNFT", {
                title: tit,
                description: des,
                price: pri,
                tokens: tok,
                nftData: data
            });
        } catch(error) {
            console.log("Failed to send NFT data: " + error);
        }
    }

    return (
        <Web3ModalProvider>

        <div>
            <h1 style={{ color: 'white', display: "flex", justifyContent: "center", marginTop: "30px" }}>Create NFTs</h1>
            <div style={{marginTop: "30px"}}>
                <div>
                    <h2 style={{color: "white", display: "flex", justifyContent: "center"}}>Your Wallet Address : <span style={{color:"hsl(47, 100%, 49%)", marginLeft: "20px", marginBottom: "20px"}}><Web3ModalProvider>
                    
            <Connect />
            
          </Web3ModalProvider></span>   </h2>
                </div>
                <div style={{marginTop: "30px"}}>
                    <h2 style={{color: "white", display: "flex", justifyContent: "flex-start", marginLeft: "15%"}}>Title</h2>
                    <div className={styles.actions}>
                    <input name="nftTitle" onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" className={styles.feild} style={{width: "70%", marginLeft: "15%"}} />
                    </div>
                </div>

                <div style={{marginTop: "30px"}}>
                    <h2 style={{color: "white", display: "flex", justifyContent: "flex-start", marginLeft: "15%"}}>Description</h2>
                    <div className={styles.actions}>
                    <input name="nftDesc" onChange={(e) => setDesc(e.target.value)} type="text" placeholder="Description" className={styles.feild} style={{width: "70%", marginLeft: "15%"}} />
                    </div>
                </div>

                <div style={{marginTop: "30px"}}>
                    <h2 style={{color: "white", display: "flex", justifyContent: "flex-start", marginLeft: "15%"}}>Token Price</h2>
                    <div className={styles.actions}>
                    <input name="nftPrice" onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Token Price (in XDC)" className={styles.feild} style={{width: "70%", marginLeft: "15%"}} />
                    </div>
                </div>

                <div style={{marginTop: "30px"}}>
                    <h2 style={{color: "white", display: "flex", justifyContent: "flex-start", marginLeft: "15%"}}>Total Tokens</h2>
                    <div className={styles.actions}>
                    <input name="nftTokens" onChange={(e) => setToken(e.target.value)} type="number" placeholder="Total Tokens" className={styles.feild} style={{width: "70%", marginLeft: "15%"}} />
                    </div>
                </div>

                <div style={{marginTop: "30px"}}>
                    <h2 style={{color: "white", display: "flex", justifyContent: "flex-start", marginLeft: "15%"}}>Upload NFT data</h2>
                    <div className={styles.actions}>
                    <input name="nftData" onChange={(e) => setData(e.target.value)}  type="file" placeholder="Search" className={styles.feild} style={{width: "70%", marginLeft: "15%"}} />
                    </div>
                </div>

                <div>
                    <button className={styles.signupButton} style={{ marginTop: "50px", width: "10%", marginLeft: "45%", marginRight: "45%" }} onClick={() => console.log("HI")}>Mint</button>
                </div>
            </div>
        </div>
        </Web3ModalProvider>
    )
}

export default Create;