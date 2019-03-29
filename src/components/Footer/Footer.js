import React from 'react';
import styles from './Footer.module.scss';

const footer = props => {
  return (
    <footer className={styles.footer}>
      Designed and coded by Noah van Boven &copy; 2019. If you use this design please mention the original author.
    </footer>
  );
};

export default footer;