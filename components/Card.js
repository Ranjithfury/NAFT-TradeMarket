// components/Card.js
import React from 'react';
import styles from './newProduct.module.css'; // Import CSS module for styling

const Card = ({ imgSrc, title, price, onBuy }) => {
  return (
    <div className={styles.card}>
      <img src={imgSrc} alt={title} className={styles.cardImg} />
      <div className={styles.cardBody}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardPrice}>{price}</p>
        <button className={styles.buyButton} onClick={onBuy}>Buy</button>
      </div>
    </div>
  );
}

export default Card;
