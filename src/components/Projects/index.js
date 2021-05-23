import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useFormatMessage } from 'react-intl-hooks';
import shoppingifyImg from '../../assets/img/shoppingify.png';
import easyVestImg from '../../assets/img/easy_vest.png';
import githubSearchImg from '../../assets/img/github_search.png';
import movieLibraryImg from '../../assets/img/movie_library.png';
import shortlyImg from '../../assets/img/shortly.png';
import weatherAppImg from '../../assets/img/weather_app.png';
import Project from './Project';
import { Carousel, Pagination } from 'react-bootstrap';

const Projects = () => {
  const formatMessage = useFormatMessage();

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const data = [
    [
      {
        img: shoppingifyImg,
        title: 'Shoppingify',
        description: formatMessage({
          id: 'A Shop List Web Application develop in the MERN Stack',
          defaultMessage:
            'A Shop List Web Application develop in the MERN Stack'
        }),
        demoLink: 'https://shoppingify-rctm.herokuapp.com/',
        sourceLink: 'https://github.com/C0lliNN/Shoppingify'
      },
      {
        img: weatherAppImg,
        title: 'Weather App',
        description: formatMessage({
          id: 'A Weather Application developed in Vue.js that allow users visualize weather information.',
          defaultMessage: 'A Weather Application developed in Vue.js that allow users visualize weather information.'
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
    ],
    [
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
        img: easyVestImg,
        title: 'Easy Vest',
        description: formatMessage({
          id:
            'A Application developed in Laravel + React that allow users create and share Questions and Lists of Questions.',
          defaultMessage:
            'A Application developed in Laravel + React that allow users create and share Questions and Lists of Questions.'
        }).toLocaleString(),
        demoLink: 'http://easy-vest.herokuapp.com/',
        sourceLink: 'https://github.com/C0lliNN/EasyVest',
      },
      {
        img: easyVestImg,
        title: 'Easy Vest 3',
        description: formatMessage({
          id:
            'A Application developed in Laravel + React that allow users create and share Questions and Lists of Questions.',
          defaultMessage:
            'A Application developed in Laravel + React that allow users create and share Questions and Lists of Questions.'
        }).toLocaleString(),
        demoLink: 'http://easy-vest.herokuapp.com/',
        sourceLink: 'https://github.com/C0lliNN/EasyVest',
        inVisible: true,
      },
      {
        img: easyVestImg,
        title: 'Easy Vest 4',
        description: formatMessage({
          id:
            'A Application developed in Laravel + React that allow users create and share Questions and Lists of Questions.',
          defaultMessage:
            'A Application developed in Laravel + React that allow users create and share Questions and Lists of Questions.'
        }).toLocaleString(),
        demoLink: 'http://easy-vest.herokuapp.com/',
        sourceLink: 'https://github.com/C0lliNN/EasyVest',
        inVisible: true,
      },
    ]
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
          <Pagination className="">
            {data.map((_, i) => (
              <Pagination.Item
                key={i}
                onClick={() => handleSelect(i)}
                active={index === i}
              >
                {i + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </div>

        <div className="portfolio-item d-flex flex-column justify-content-between mb-5">
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            controls={false}
            indicators={false}
            interval={Math.pow(10, 10)}
          >
            {data.map((projects, i) => (
              <Carousel.Item key={i}>
                {projects.map((project) => (
                  <Project {...project} key={project.title} inVisible={project.inVisible} />
                ))}
              </Carousel.Item>
            ))}
          </Carousel>
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
