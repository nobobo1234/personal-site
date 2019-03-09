import React from 'react';
import styles from './Card.module.scss';

const Card = props => {
  return (
    <div className={styles.card}>
      <i className={`material-icons ${styles['card__icon']}`}>{props.icon}</i>
      <h4 className={styles['card__heading']}>{props.title}</h4>
      <p className={styles['card__description']}>
        {props.children}
      </p>
      <div className={styles['card__bold']}>Things I work with:</div>
      <p className={styles['card__work-with']}>{props.workWith.join(', ')}</p>
    </div>
  );
};

export default Card;