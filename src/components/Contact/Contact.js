import React from 'react';
import styles from './Contact.module.scss';

const contact = props => {
  return (
    <section className={styles.contact}>
      <h2 className="heading--3 heading--3--dark">Contact me</h2>
      <p className={styles['contact__text']}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut cumque debitis distinctio doloribus eveniet facilis fugiat maxime mollitia nobis, ratione repudiandae? Consequuntur, dolores expedita incidunt laborum magnam maiores odio!
      </p>
    </section>
  );
};

export default contact;