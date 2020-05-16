import React from 'react';
import classes from './AboutMe.module.css';
import config from '../../../config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FormattedMessage } from 'react-intl';

const AboutMe = (props) => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="about"
    >
      <div className="w-100">
        <h1 className={`mb-0 ${classes.Title}`}>
          {config.firstName}
          <span className="text-primary">{config.lastName}</span>
        </h1>
        <div className="SubHeading mb-5">
          Campos dos Goytacazes, Rio de Janeiro{' - '}
          <FormattedMessage id="Brazil" defaultMessage="Brazil" />
        </div>
        <p className="lead mb-5">
          <FormattedMessage
            id="MainText"
            defaultMessage="I'm Front-Developer that loves apply his knowledge to solve problems,
          create powerful products and impact business/lives. I'm quietly
          confident, naturally curious, and perpetually working on sharping my
          skills."
          />
        </p>
        <div className={classes.SocialIcons}>
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
