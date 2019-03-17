import React from 'react';
import styles from './Navbar.module.scss';

import Button from '../Button/Button';
import { Link } from 'react-scroll';

const navbar = props => {
  return (
      <nav className={styles.nav}>
        <h3 className={styles['nav__name']}>Logo</h3>
        <ul className={styles['nav__links']}>
          <li>
            <Link to="about" className={styles['nav__link']} smooth={true} duration={700}>
              About me
            </Link>
          </li>
          <li>
            <Link to="speciality" className={styles['nav__link']} smooth={true} duration={700}>
              Speciality
            </Link>
          </li>
          <li>
            <Link to="portfolio" className={styles['nav__link']} smooth={true} duration={700}>
              Portfolio
            </Link>
          </li>
          <li>
            <Button to="contact" theme="cta">
              Contact me
            </Button>
          </li>
        </ul>
      </nav>
  )
};

export default navbar;