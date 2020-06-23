import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import hardwareSThorImg from '../../assets/img/hardware_sthor.png';
import movieLibraryImg from '../../assets/img/movie_library.png';
import Project from './Project/Project';

const Projects = (props) => {
  const data = [
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
