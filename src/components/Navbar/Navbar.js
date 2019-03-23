import React from 'react';
import styles from './Navbar.module.scss';

import logo from '../../assets/logo.png'
import Button from '../Button/Button';
import { Link } from 'react-scroll';

const navbar = props => {
  return (
      <nav className={styles.nav}>
        <div className={styles['nav__logo-container']}>
          <img src={logo} alt="Logo" className={styles['nav__logo']}/>
        </div>
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