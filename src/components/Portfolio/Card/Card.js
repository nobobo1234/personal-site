import React from 'react';
import styles from './Card.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = props => {
  console.log(props.technologies);
  return (
      <div className={styles.card}>
        <h4 className={styles['card__heading']}>{props.title}</h4>
        <img src={props.img} alt="Project" className={styles['card__img']}/>
        <p className={styles['card__description']}>
          {props.children}
        </p>
        <div className={styles['card__used']}>Links:</div>
        <div className={styles['card__links']}>
          <a href={props.github}>Github</a>
          {props.demo ? <a href={props.demo}>Demo</a> : null}
        </div>
        <div className={styles['card__used']}>Technologies used:</div>
        <div className={styles['card__icons']}>
          {props.technologies.map((e) => (
            <FontAwesomeIcon icon={['fab', e]} />
          ))}
        </div>
      </div>
  );
};

export default Card;