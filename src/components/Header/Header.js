import React from 'react';
import styles from './Header.module.scss';

const header = props => {
  return (
    <header className={styles.header}>
      <h1 className="heading--1">My name</h1>
      <h3 className="heading--3 heading--3--light">Junior Front-end Web Developer</h3>
      <div className={styles['header__buttons']}>
        <a href="/" className="btn btn--light">About me</a>
        <a href="/" className="btn btn--cta">Contact me</a>
      </div>
    </header>
  );
};

export default header;