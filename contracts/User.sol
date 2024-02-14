// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract User {

    event NFTSell(address _nftID, address _from);
    event NFTBuy(address _nftID, address _to);



    function sellNFT(address _nftAddress, address _from, address owner , uint nftCost) public payable {
        emit NFTSell(_nftAddress, _from );

        uint amount = 500000;
        uint256 fromBalance = address(_from).balance;
        uint256 ownerBalance = address(owner).balance;
        require(fromBalance >= amount && ownerBalance >= nftCost , "Insufficient balance in contract");


        (bool success, ) = owner.call{value: amount}("");   // Sending 0.00005 XDC to Owner
        require(success, "Failed to send XDC to Owner");


        (bool successFrom, ) = _from.call{value: nftCost}("");  // Sending the NFT Token Cost to the Seller (Remaining amt after Transaction Fee)
        require(successFrom, "Failed to send XDC to Owner ");

    }

    function buyNFT(address _nftAddress, address owner ,address _to) public payable {
        emit NFTBuy(_nftAddress, _to);

        uint256 balance = address(_to).balance;
        uint amount = 500000;
        require(balance >= amount, "Insufficient balance in contract");



        (bool success, ) = _to.call{value: amount}("");    // Sending 0.00005 XDC to Owner
        require(success, "Failed to send Ether");
    }


}