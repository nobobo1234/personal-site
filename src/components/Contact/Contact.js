import React, { useState } from 'react';
import styles from './Contact.module.scss';
import { useTranslation } from "react-i18next";

import Heading from '../Heading/Heading';
import Button from '../Button/Button';

const contact = props => {
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ query, setQuery ] = useState("");
  const [ message, setMessage ] = useState("");
  const { t, i18n } = useTranslation();

  const onFormClick = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", name);
    form.append("email", email);
    form.append("query", query);
    const response = await fetch('/email/email.php', {
      method: 'POST',
      body: form
    });
    const text = await response.text();
    setMessage(text);
    setTimeout(() => {
      setMessage("");
      setName("");
      setEmail("");
      setQuery("");
    }, 3000);
  };

  const valid = () =>
      !(name && email && query && email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/));

  return (
    <section className={styles.contact} id="contact">
      <Heading type="3" color="dark" weight="normal">{t("Contact me")}</Heading>
      <p className={styles['contact__text']}>
        {t("contact text")}
      </p>
      <div className={[styles['contact__text'], styles['contact__text--red']].join(" ")}>{message}</div>
      <form action="#" className={styles.form}>
        <div className={styles['form__group']}>
          <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              className={styles['form__input']}
              placeholder={t("put name here")}/>
          <label htmlFor="name" className={styles['form__label']}>Name</label>
        </div>
        <div className={styles['form__group']}>
          <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className={styles['form__input']}
              placeholder={t("put email here")}/>
          <label htmlFor="name" className={styles['form__label']}>Email</label>
        </div>
        <div className={styles['form__group']}>
          <textarea
              name="query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={styles['form__textarea']}
              placeholder={t("put message here")} />
          <label htmlFor="query" className={styles['form__label']}>Message</label>
        </div>
        <Button theme="cta" onClick={onFormClick} disabled={valid()}>
          {t("submit")} <i className={`material-icons ${styles['form__btn-icon']}`}>call_made</i>
        </Button>
      </form>
    </section>
  );
};

export default contact;