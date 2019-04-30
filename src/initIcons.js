import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faJsSquare,
  faDiscord,
  faTwitterSquare,
  faInstagram,
  faPython,
  faSass,
  faHtml5,
  faReact,
  faLinkedin,
  faGithub,
  faAngular } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export const iconMapping = {
  'js-square': 'Javascript',
  'discord': 'Discord',
  'twitter-square': 'Twitter',
  'instagram': 'Instagram',
  'python': 'Python',
  'sass': 'Sass CSS',
  'html5': 'HTML',
  'react': 'ReactJS',
  'linkedin': 'Linkedin',
  'github': 'Github',
  'angular': 'Angular'
}

library.add(faJsSquare, faGithub, faLinkedin, faDiscord, faTwitterSquare, faInstagram, faPython, faSass, faHtml5, faAngular, faReact, faMoon, faSun);
