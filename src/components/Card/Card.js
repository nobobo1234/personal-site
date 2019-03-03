import React from 'react';
import styles from './Card.module.scss';

const Card = props => {
  return (
    <div className={styles.card}>
      <h4 className={styles['card__heading']}>{props.title}</h4>
      {props.children}
    </div>
  );
};

export default Card;