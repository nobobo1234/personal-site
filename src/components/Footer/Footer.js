import React from 'react';
import styles from './Footer.module.scss';
import { useTranslation } from "react-i18next";

const footer = () => {
  const { i18n } = useTranslation();

  const changeLanguage = async () => {
    const language = i18n.language === 'en' ? 'nl' : 'en';
    await i18n.changeLanguage(language);
  };

  return (
    <footer className={styles.footer}>
      Designed and coded by Noah van Boven &copy; 2019. If you use this design please mention the original author.
      <div onClick={changeLanguage} className={styles['footer__switch']}>
        Switch to <b>{i18n.language === 'en' ? 'Dutch' : 'English'}</b>
      </div>
    </footer>
  );
};

export default footer;
