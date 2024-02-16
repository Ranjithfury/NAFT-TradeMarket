// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract NFT {


    struct mintedNFT {
        address owner;
        string title;
        string description;
        uint tokenPrice;
        uint totalTokens;
        uint[] nftData;
    }

    mintedNFT[] public nfts;

    function mintNFT(address payable _admin,address _ownerAddress, string memory _nftTitle, string memory _nftDescription, uint _price, uint _tokens, uint[] memory _data ) public {
        nfts.push(mintedNFT({owner: _ownerAddress, title: _nftTitle, description: _nftDescription, tokenPrice: _price, totalTokens: _tokens, nftData: _data}));

        /*(bool success, ) = _admin.call{value: 5}("");
        require(success, "Failed to send XDC Tokens");*/

    }

    /*function mapToNFT(address nftAddress) public {

    }*/

}

