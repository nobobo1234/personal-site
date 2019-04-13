import React from 'react';
import styles from './Card.module.scss';
import { useTranslation } from "react-i18next";

const Card = ({ children, workWith, title, icon }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.card}>
      <i className={`material-icons ${styles['card__icon']}`}>{icon}</i>
      <h4 className={styles['card__heading']}>{title}</h4>
      <p className={styles['card__description']}>
        {children}
      </p>
      <div className={styles['card__bold']}>{t("already worked with")}</div>
      <p className={styles['card__work-with']}>{workWith.join(', ')}</p>
    </div>
  );
};

export default Card;
