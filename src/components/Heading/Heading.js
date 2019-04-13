import React from 'react';
import styles from './Heading.module.scss';

const Heading = ({ children, type, weight, color, extraClass }) => {
  // Assign all the classes
  const classes = [styles[`heading-${type}`]];
  if(weight) classes.push(styles[`heading-${type}--${weight}`]);
  if(color) classes.push(styles[`heading-${type}--${color}`]);
  if(extraClass) classes.push(extraClass);

  // Create the headings
  let heading;
  switch(type) {
    case '1':
      heading = <h1 className={classes.join(' ')}>{children}</h1>;
      break;
    case '2':
      heading = <h2 className={classes.join(' ')}>{children}</h2>;
      break;
    case '3':
      heading = <h3 className={classes.join(' ')}>{children}</h3>;
      break;
    default:
      heading = <h1 className={classes.join(' ')}>{children}</h1>
  }

  return heading;
};

export default Heading;