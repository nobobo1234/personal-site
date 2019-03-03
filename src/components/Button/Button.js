import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, theme }) => {
  return (
      <a href="/" className={[styles.btn, styles[`btn--${theme}`]].join(" ")}>{children}</a>
  );
};

export default Button;