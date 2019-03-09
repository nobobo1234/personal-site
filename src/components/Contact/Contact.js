import React from 'react';
import styles from './Contact.module.scss';

import Heading from '../Heading/Heading';
import Button from '../Button/Button';

const contact = props => {
  return (
    <section className={styles.contact}>
      <Heading type="3" color="dark" weight="normal">Contact me</Heading>
      <p className={styles['contact__text']}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut cumque debitis distinctio doloribus eveniet facilis fugiat maxime mollitia nobis, ratione repudiandae? Consequuntur, dolores expedita incidunt laborum magnam maiores odio!
      </p>
      <form action="#" className={styles.form}>
        <div className={styles['form__group']}>
          <input type="text" name="name" className={styles['form__input']} placeholder="Put your name here..."/>
          <label htmlFor="name" className={styles['form__label']}>Name</label>
        </div>
        <div className={styles['form__group']}>
          <input type="email" name="email" className={styles['form__input']} placeholder="Put your email here..."/>
          <label htmlFor="name" className={styles['form__label']}>Email</label>
        </div>
        <div className={styles['form__group']}>
          <textarea name="message" className={styles['form__textarea']} placeholder="Write your message here..." />
          <label htmlFor="message" className={styles['form__label']}>Message</label>
        </div>
        <Button theme="cta">Submit <i className={`material-icons ${styles['form__btn-icon']}`}>call_made</i></Button>
      </form>
    </section>
  );
};

export default contact;