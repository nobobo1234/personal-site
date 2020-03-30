import React from 'react';
import styles from './Speciality.module.scss';
import { useTranslation } from "react-i18next";

import Heading from '../Heading/Heading';
import Card from './Card/Card';

const Speciality = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.speciality} id="speciality">
      <Heading type="3" color="dark" weight="normal">{t("Speciality")}</Heading>
      <div className={styles['speciality__cards']}>
        <Card
            title="Front-end"
            icon="computer"
            workWith={['HTML', 'React', 'Javascript', 'Angular']}>
          {t("front-end")}
        </Card>
        <Card
            title={t("webdesign")}
            icon="format_paint"
            workWith={['CSS', 'SCSS', 'CSS-in-JS']}>
          {t("designtext")}
        </Card>
        <Card
            title={t("bots")}
            icon="android"
            workWith={['Discord', 'Telegram', 'Twitter', 'Slack']}>
          {t("bottext")}
        </Card>
      </div>
    </section>
  );
};

export default Speciality;
