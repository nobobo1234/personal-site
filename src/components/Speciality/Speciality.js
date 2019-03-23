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
            workWith={['HTML', 'React', 'Javascript', 'Angular']}>
          I love starting with nothing and beginning with nothing, and I also love coding. That's why I like making
          websites for the browser such as this one.
        </Card>
        <Card
            title="Webpage design"
            icon="format_paint"
            workWith={['CSS', 'SCSS', 'CSS-in-JS']}>
          I like thinking creatively and making a website look colorful and stunning, make it look minimalistic or
          either full of animations. A lot of things are possible!
        </Card>
        <Card
            title="Interactive bots"
            icon="android"
            workWith={['Discord', 'Telegram', 'Twitter', 'Slack']}>
          I enjoy coding bots for social platforms. It is something that is coming to life on social media and talking
          on there like a real person.
        </Card>
      </div>
    </section>
  );
};

export default speciality;