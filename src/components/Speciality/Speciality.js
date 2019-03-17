import React from 'react';
import styles from './Speciality.module.scss';

import Heading from '../Heading/Heading';
import Card from './Card/Card';

const speciality = props => {
  return (
    <section className={styles.speciality} id="speciality">
      <Heading type="3" color="dark" weight="normal">Speciality</Heading>
      <div className={styles['speciality__cards']}>
        <Card
            title="Front-end"
            icon="computer"
            workWith={['Lorem', 'Elit', 'Impedit']}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis distinctio, impedit porro quos rem sit.
        </Card>
        <Card
            title="Webpage design"
            icon="format_paint"
            workWith={['Sint', 'Mollitia', 'Dolor']}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id mollitia natus, nihil sapiente sed sint!
        </Card>
        <Card
            title="Interactive bots"
            icon="android"
            workWith={['Amini', 'Doloremque', 'Voluptas']}>
          Consectetur adipisicing elit. Animi architecto, doloremque quibusdam quod sed voluptas.
        </Card>
      </div>
    </section>
  );
};

export default speciality;