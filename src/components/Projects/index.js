import PropTypes from 'prop-types';
import React from 'react';
import { useFormatMessage } from 'react-intl-hooks';
import githubSearchImg from '../../assets/img/github_search.png';
import movieLibraryImg from '../../assets/img/movie_library.png';
import shortlyImg from '../../assets/img/shortly.png';
import weatherAppImg from '../../assets/img/weather_app.png';
import Project from './Project';

const Projects = () => {
  const formatMessage = useFormatMessage();

  const projects = [
    {
      img: githubSearchImg,
      title: 'Github Search',
      description: formatMessage({
        id:
          'A Web application developed in React/Typescript that allows users to search for Github Profiles and show them with an amazing User Experience.',
        defaultMessage:
          'A Web application developed in React/Typescript that allows users to search for Github Profiles and show them with an amazing User Experience.'
      }).toLocaleString(),
      demoLink: 'https://c0llinn.github.io/GithubSearch',
      sourceLink: 'https://github.com/C0lliNN/GithubSearch'
    },
    {
      img: weatherAppImg,
      title: 'Weather App',
      description: formatMessage({
        id:
          'A Weather Application developed in Vue.js that allow users visualize weather information.',
        defaultMessage:
          'A Weather Application developed in Vue.js that allow users visualize weather information.'
      }),
      demoLink: 'https://c0llinn.github.io/Weather-App',
      sourceLink: 'https://github.com/C0lliNN/Weather-App'
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
        <div className="d-flex justify-content-between align-items-center px-3 px-md-0">
          <h2 className="">
            {formatMessage({
              id: 'Projects',
              defaultMessage: 'Projects'
            })}
          </h2>
        </div>

        <div className="portfolio-item d-flex flex-column justify-content-between mb-5">
          {projects.map((project) => (
            <Project
              {...project}
              key={project.title}
              inVisible={project.inVisible}
            />
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
