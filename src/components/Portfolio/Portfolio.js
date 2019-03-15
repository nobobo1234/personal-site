import React from 'react';
import styles from './Portfolio.module.scss';

import Heading from '../Heading/Heading';
import Card from './Card/Card';

const portfolio = props => {
  return (
    <section className={styles.portfolio}>
      <Heading type="3" color="dark" weight="normal">Portfolio</Heading>
      <div className={styles['portfolio__cards']}>
        <Card
            title="Project 1"
            github="https://github.com"
            demo="https://example.com"
            technologies={['twitter-square', 'discord']}
            img="http://via.placeholder.com/1920x1080?text=Screenshot+of+project+1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis distinctio, impedit porro quos rem sit.
        </Card>
        <Card
            title="Project 2"
            technologies={['instagram', 'js-square']}
            github="https://github.com"
            img="http://via.placeholder.com/1920x1080?text=Screenshot+of+project+2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis distinctio, impedit porro quos rem sit.
        </Card>
        <Card
            title="Project 3"
            github="https://github.com"
            technologies={['python']}
            img="http://via.placeholder.com/1920x1080?text=Screenshot+of+project+3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis distinctio, impedit porro quos rem sit.
        </Card>
      </div>
    </section>
  );
};

export default portfolio;