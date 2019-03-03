import React from 'react';
import styles from './Speciality.module.scss';

import Heading from '../Heading/Heading';
import Card from '../Card/Card';

const speciality = props => {
  return (
    <section className={styles.speciality}>
      <Heading type="3" color="dark" weight="normal">Speciality</Heading>
      <div className={styles['speciality__cards']}>
        <Card title="Front-end">Card 1</Card>
        <Card title="Webpage design">Card 2</Card>
        <Card title="Interactive bots">Card 3</Card>
      </div>
    </section>
  );
};

export default speciality;