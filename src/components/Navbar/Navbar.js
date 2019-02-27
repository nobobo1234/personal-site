import React from 'react';
import styles from './Navbar.module.scss'

const navbar = props => {
  return (
      <nav className={styles.nav}>
        <h3 className={styles['nav__name']}>Logo</h3>
        <ul className={styles['nav__links']}>
          <li><a href="/" className={styles['nav__link']}>About me</a></li>
          <li><a href="/" className={styles['nav__link']}>Speciality</a></li>
          <li><a href="/" className={styles['nav__link']}>Portfolio</a></li>
          <li><a href="/" className={styles['nav__button']}>Contact me</a></li>
        </ul>
      </nav>
  )
};

export default navbar;