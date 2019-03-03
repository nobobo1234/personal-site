import React from 'react';
import styles from './Contact.module.scss';

import Heading from '../Heading/Heading';

const contact = props => {
  return (
    <section className={styles.contact}>
      <Heading type="3" color="dark" weight="normal">Contact me</Heading>
      <p className={styles['contact__text']}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut cumque debitis distinctio doloribus eveniet facilis fugiat maxime mollitia nobis, ratione repudiandae? Consequuntur, dolores expedita incidunt laborum magnam maiores odio!
      </p>
    </section>
  );
};

export default contact;