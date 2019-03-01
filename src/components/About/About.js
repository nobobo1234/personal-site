import React from 'react';
import styles from './About.module.scss';

const about = props => {
  return (
      <section className={styles.about}>
        <div className="information">
          <h2 className="heading--2">Hello, I am myName. Nice to meet you.</h2>
          <p className={styles['about__text']}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, adipisci corporis dignissimos eius eveniet, facilis harum id perferendis, provident sapiente sit ullam voluptate voluptates. Accusamus adipisci animi atque consequatur corporis debitis dolores dolorum eos eum ex expedita facere id illo incidunt ipsum maiores minima modi natus nihil nobis nulla numquam odio odit omnis perferendis praesentium quae quas quasi quidem reiciendis repudiandae rerum sequi similique, sunt suscipit velit voluptates! Alias amet assumenda debitis fuga iure iusto quasi quos ratione totam vero. Ad, blanditiis cumque delectus ducimus est impedit iste itaque iusto maiores mollitia nostrum quos saepe sequi tempora velit voluptatem voluptatibus!
          </p>
        </div>
        <img className={styles['about__photo']} src="http://via.placeholder.com/2660x2887?text=Photo+of+myself" alt="Photo of myself"/>
      </section>
  )
};

export default about;