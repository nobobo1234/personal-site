import React from 'react';
import styles from './Portfolio.module.scss';
import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";

import Heading from '../Heading/Heading';
import Card from './Card/Card';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const { i18n } = useTranslation();

  const fetchData = async () => {
    const response = await fetch('https://noahvb.nl/portfolio/api.php/records/projects');
    const data = await response.json();
    setProjects(data.records);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className={styles.portfolio} id="portfolio">
      <Heading type="3" color="dark" weight="normal">Portfolio</Heading>
      <div className={styles['portfolio__cards']}>
        {projects.map(project => (
            <Card
              key={project.id}
              title={project.name}
              github={project.github}
              demo={project.demo}
              technologies={project.technologies.split(',')}
              img={project.screenshot}>
              {i18n.language === 'en' ? project.description : project['description_dutch']}
            </Card>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
