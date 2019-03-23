import React from 'react';
import styles from './About.module.scss';
import { firstName } from "../../constants";

import Heading from '../Heading/Heading';
import myself from '../../assets/myself.jpg';

const about = props => {
  return (
      <section className={styles.about} id="about">
        <div className="information">
          <Heading type="2">Hello, I am {firstName}. Nice to meet you.</Heading>
          <p className={styles['about__text']}>
            My name is Noah and I am 16 years old. I love programming and doing mathematics. I started programming
            5 years ago and I have loved it ever since. You can make ideas come to life, whether it are programs running
            on your computer, websites or creative animations, everything is possible. The idea that so much is possible
            with just writing text in a simple editor is something I find amazing. I have focused on making websites on
            the internet because that's the easiest thing for most people to access. Everyone has a telephone or a
            computer near them these days, and internet or access to a random website is just a few clicks away. I have
            already written a lot of simple and complex sites, so I know how most thing work. The most important part is
            that I still enjoy every single moment of coding!
          </p>
        </div>
        <img className={styles['about__photo']} src={myself} alt="Myself"/>
      </section>
  )
};

export default about;