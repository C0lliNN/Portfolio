import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import easyVestImg from '../../assets/img/easy_vest.png';
import hardwareSThorImg from '../../assets/img/hardware_sthor.png';
import movieLibraryImg from '../../assets/img/movie_library.png';
import shortlyImg from '../../assets/img/shortly.png';
import Project from './Project/Project';

const Projects = (props) => {
  const data = [
    {
      img: easyVestImg,
      title: 'Easy Vest',
      description: props.intl.formatMessage({
        id: 'EasyVestDescription',
        defaultMessage:
          'A Application developed in Laravel + React that allow users create and share Questions and Lists of Questions.'
      }),
      demoLink: 'http://easy-vest.herokuapp.com/',
      sourceLink: 'https://github.com/C0lliNN/EasyVest'
    },
    {
      img: hardwareSThorImg,
      title: 'HardwareSThor',
      description: props.intl.formatMessage({
        id: 'HardwareSThorDescription',
        defaultMessage: 'A Hardware e-commerce developed fully in React'
      }),
      demoLink: 'https://hardwaresthor.web.app/',
      sourceLink: 'https://github.com/C0lliNN/HardwareSthor'
    },
    {
      img: movieLibraryImg,
      title: 'Movie Library',
      description: props.intl.formatMessage({
        id: 'MovieLibraryDescription',
        formatMessage:
          'A Web Application developed in ReactJS that allows users navigate throughout movies easily.'
      }),
      demoLink: 'https://c0llinn.github.io/MovieLibrary/',
      sourceLink: 'https://github.com/C0lliNN/MovieLibrary'
    },
    {
      img: shortlyImg,
      title: 'Shortly',
      description: props.intl.formatMessage({
        id: 'ShortlyDescription',
        defaultMessage:
          'A Landing Page for URL Shortener developed in HTML, LESS and Vanilla JS'
      }),
      demoLink: 'https://c0llinn.github.io/Shortly/',
      sourceLink: 'https://github.com/C0lliNN/Shortly'
    }
  ];

  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex justify-content-center align-items-center"
      id="projects"
    >
      <div className="w-100">
        <h2 className="mb-5">
          <FormattedMessage id="Projects" defaultMessage="Projects" />
        </h2>

        <div className="resume-item d-flex flex-column justify-content-between mb-5">
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

export default injectIntl(Projects);
