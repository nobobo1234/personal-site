import React from 'react';
import styles from './Header.module.scss';

import Button from '../Button/Button';
import Heading from '../Heading/Heading';

const header = props => {
  return (
    <header className={styles.header}>
      <Heading type="1">My name</Heading>
      <Heading type="3" color="light" weight="thin">Junior Front-end Web Developer</Heading>
      <div className={styles['header__buttons']}>
        <Button theme="light">About me</Button>
        <Button theme="cta">Contact me</Button>
      </div>
    </header>
  );
};

export default header;