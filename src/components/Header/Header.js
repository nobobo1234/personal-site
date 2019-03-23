import React from 'react';
import styles from './Header.module.scss';
import { firstName, surName } from "../../constants";

import Button from '../Button/Button';
import Heading from '../Heading/Heading';

const header = props => {
  return (
    <header className={styles.header}>
      <Heading type="1">{firstName} {surName}</Heading>
      <Heading type="3" color="light" weight="thin">Junior Front-end Web Developer</Heading>
      <div className={styles['header__buttons']}>
        <Button theme="light" to="about">About me</Button>
        <Button theme="cta" to="contact">
          Contact me <i className={`material-icons ${styles['header__icon']}`}>email</i>
        </Button>
      </div>
    </header>
  );
};

export default header;