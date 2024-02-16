import React, {useContext, useState, useCallback} from "react";
import Collections from "../../components/Collections";
import { Web3ModalContext } from '../../contexts/Web3ModalProvider';
import Web3ModalProvider from "../../contexts/Web3ModalProvider";
import Register from "../../components/Register";
import axios from "axios";

const Collec = () => {

    return (
        <Collections />
    )
}

export default Collec;