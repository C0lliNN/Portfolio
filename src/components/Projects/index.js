import PropTypes from 'prop-types';
import React from 'react';
import { useFormatMessage } from 'react-intl-hooks';
import easyVestImg from '../../assets/img/easy_vest.png';
import hardwareSThorImg from '../../assets/img/hardware_sthor.png';
import movieLibraryImg from '../../assets/img/movie_library.png';
import shortlyImg from '../../assets/img/shortly.png';
import Project from './Project';

const Projects = () => {
  const formatMessage = useFormatMessage();

  const data = [
    {
      img: easyVestImg,
      title: 'Easy Vest',
      description: formatMessage({
        id:
          'A Application developed in Laravel + React that allow users create and share Questions and Lists of Questions.',
        defaultMessage:
          'A Application developed in Laravel + React that allow users create and share Questions and Lists of Questions.'
      }).toLocaleString(),
      demoLink: 'http://easy-vest.herokuapp.com/',
      sourceLink: 'https://github.com/C0lliNN/EasyVest'
    },
    {
      img: hardwareSThorImg,
      title: 'HardwareSThor',
      description: formatMessage({
        id: 'A Hardware e-commerce developed fully in React.',
        defaultMessage: 'A Hardware e-commerce developed fully in React.'
      }).toLocaleString(),
      demoLink: 'https://hardwaresthor.web.app/',
      sourceLink: 'https://github.com/C0lliNN/HardwareSthor'
    },
    {
      img: movieLibraryImg,
      title: 'Movie Library',
      description: formatMessage({
        id:
          'A Web Application developed in ReactJS that allows users navigate throughout movies easily.',
        defaultMessage:
          'A Web Application developed in ReactJS that allows users navigate throughout movies easily.'
      }).toLocaleString(),
      demoLink: 'https://c0llinn.github.io/MovieLibrary/',
      sourceLink: 'https://github.com/C0lliNN/MovieLibrary'
    },
    {
      img: shortlyImg,
      title: 'Shortly',
      description: formatMessage({
        id:
          'A Landing Page for URL Shortener developed in HTML, LESS and Vanilla JS.',
        defaultMessage:
          'A Landing Page for URL Shortener developed in HTML, LESS and Vanilla JS.'
      }).toLocaleString(),
      demoLink: 'https://c0llinn.github.io/Shortly/',
      sourceLink: 'https://github.com/C0lliNN/Shortly'
    }
  ];

  return (
    <section
      className="portfolio-section px-0 py-3 px-md-3 px-lg-5 py-lg-5 d-flex justify-content-center align-items-center"
      id="projects"
    >
      <div className="w-100">
        <h2 className="mb-5 px-3 px-md-0">
          {formatMessage({
            id: 'Projects',
            defaultMessage: 'Projects'
          })}
        </h2>

        <div className="portfolio-item d-flex flex-column justify-content-between mb-5">
          {data.map((project) => (
            <Project {...project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

Projects.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func
  })
};

export default Projects;
