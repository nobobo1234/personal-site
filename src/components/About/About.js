import React from 'react';
import styles from './About.module.scss';
import { useTranslation } from "react-i18next";

import Heading from '../Heading/Heading';
import myself from '../../assets/myself.jpg';

const about = () => {
  const { t } = useTranslation();
  return (
      <section className={styles.about} id="about">
        <div className="information">
          <Heading type="2">{t('greeting')}</Heading>
          <p className={styles['about__text']}>
            {t('about me')}
          </p>
        </div>
        <img className={styles['about__photo']} src={myself} alt="Myself"/>
      </section>
  )
};

export default about;
