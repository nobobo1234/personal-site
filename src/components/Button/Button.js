import React from 'react';
import styles from './Button.module.scss';

import { Link } from 'react-scroll';

const Button = ({ children, theme, to, onClick }) => {
  return (
      to ? (
            <Link to={to} smooth={true} duration={700} className={[styles.btn, styles[`btn--${theme}`]].join(" ")}>
              {children}
            </Link>
          ) : (
            <button onClick={onClick} className={[styles.btn, styles[`btn--${theme}`]].join(" ")}>{children}</button>
          )
  );
};

export default Button;