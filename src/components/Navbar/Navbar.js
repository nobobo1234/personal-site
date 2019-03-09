import React from 'react';
import styles from './Navbar.module.scss';

import Button from '../Button/Button';

const navbar = props => {
  return (
      <nav className={styles.nav}>
        <h3 className={styles['nav__name']}>Logo</h3>
        <ul className={styles['nav__links']}>
          <li>
            <a href="/" className={styles['nav__link']}>
              About me
            </a>
          </li>
          <li>
            <a href="/" className={styles['nav__link']}>
              Speciality
            </a>
          </li>
          <li>
            <a href="/" className={styles['nav__link']}>
              Portfolio
            </a>
          </li>
          <li>
            <Button theme="cta">
              Contact me
            </Button>
          </li>
        </ul>
      </nav>
  )
};

export default navbar;