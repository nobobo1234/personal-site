import React from 'react';
import styles from './Header.module.scss';

const header = props => {
  return (
    <header className={styles.header}>
      <h1 className="heading--1">Here comes my name</h1>
      <h3 className="heading--3">Junior Front-end Web Developer</h3>
    </header>
  );
};

export default header;