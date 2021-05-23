import React from 'react';
import config from '../../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useFormatMessage } from 'react-intl-hooks';

const AboutMe = () => {
  const formatMessage = useFormatMessage();

  return (
    <section
      className="portfolio-section p-3 p-lg-5 d-flex align-items-center"
      id="about"
    >
      <div className="w-100">
        <h1 className="mb-0">
          {config.firstName}
          <span className="text-primary">{config.lastName}</span>
        </h1>
        <div className="subheading mb-5">
          Campos dos Goytacazes, Rio de Janeiro{' - '}
          {formatMessage({
            id: 'Brazil',
            defaultMessage: 'Brazil'
          })}
        </div>
        <p className="lead mb-5">
          {formatMessage({
            id:
              "I am a software craftsman with a burning desire to produce high-quality work. As a programmer, it is my job to solve problems, and more often than not, the solutions are not immediately obvious. The process of debugging ultimately helped foster the growth of my attention to detail and critical thinking abilities.",
            defaultMessage:
              "I am a software craftsman with a burning desire to produce high-quality work. As a programmer, it is my job to solve problems, and more often than not, the solutions are not immediately obvious. The process of debugging ultimately helped foster the growth of my attention to detail and critical thinking abilities."
          })}
        </p>
        <div className="social-icons">
          <a
            href="https://github.com/C0lliNN"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/raphael-collin-0b770319a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
