import React, { useState } from 'react';
import styles from './Navbar.module.scss';

import logo from '../../assets/logo.png'
import Button from '../Button/Button';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navbar = props => {
  const [icon, setIcon] = useState('sun');

  const switchToDark = (e) => {
    (e.target.checked) ? setIcon('moon') : setIcon('sun');
    (e.target.checked) ? document.body.setAttribute('data-theme', 'dark') : document.body.removeAttribute('data-theme');
  };

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
          <li className={styles.dark}>
            <input type="checkbox" id="dark-switch" className={styles['dark__checkbox']} onChange={switchToDark} />
            <label htmlFor="dark-switch" className={styles['dark__label']}>
              <FontAwesomeIcon icon={['fas', icon]}/>
            </label>
          </li>
        </ul>
      </nav>
  )
};

export default navbar;