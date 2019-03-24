import React from 'react';
import styles from './Portfolio.module.scss';
import { useEffect, useState } from 'react';

import Heading from '../Heading/Heading';
import Card from './Card/Card';

const portfolio = props => {
  const [projects, setProjects] = useState([]);

  const fetchData = async () => {
    const response = await fetch('https://noahvb.nl/portfolio/api.php/records/projects');
    const data = await response.json();
    setProjects(data.records);
  };

  useEffect(() => {
    fetchData();
  });
  return (
    <section className={styles.portfolio} id="portfolio">
      <Heading type="3" color="dark" weight="normal">Portfolio</Heading>
      <div className={styles['portfolio__cards']}>
        {projects.map(project => (
            <Card
              title={project.name}
              github={project.github}
              demo={project.demo}
              technologies={project.technologies.split(',')}
              img={project.screenshot}>
              {project.description}
            </Card>
        ))}
      </div>
    </section>
  );
};

export default portfolio;