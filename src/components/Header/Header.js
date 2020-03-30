import React from 'react';
import styles from './Header.module.scss';
import { useTranslation } from "react-i18next";

import Button from '../Button/Button';
import Heading from '../Heading/Heading';

const Header = () => {
  const { t } = useTranslation();
  return (
    <header className={styles.header}>
      <Heading type="1">Noah van Boven</Heading>
      <Heading type="3" color="light" weight="thin">Junior Front-end Web Developer</Heading>
      <div className={styles['header__buttons']}>
        <Button theme="light" to="about">{t("About me")}</Button>
        <Button theme="cta" to="contact">
          {t("Contact me")} <i className={`material-icons ${styles['header__icon']}`}>email</i>
        </Button>
      </div>
    </header>
  );
};

export default Header;
