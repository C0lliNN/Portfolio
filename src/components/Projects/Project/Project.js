import PropTypes from 'prop-types';
import React from 'react';
import classes from './Project.module.css';
import { FormattedMessage } from 'react-intl';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Project = (props) => {
  return (
    <article className={classes.Project}>
      <div className={classes.ImageDiv}>
        <img src={props.img} alt={`Raphael Collin - ${props.title}`} />
      </div>
      <div>
        <h3>{props.title}</h3>
        <p className="lead">{props.description}</p>
        <a
          className="btn btn-primary"
          href={props.demoLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
        &nbsp;&nbsp;
        <a
          href={props.sourceLink}
          variant="link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEye} />
          &nbsp;
          <FormattedMessage id="SourceCode" defaultMessage="Source Code" />
        </a>
      </div>
    </article>
  );
};

Project.propTypes = {
  demoLink: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  sourceLink: PropTypes.string,
  title: PropTypes.string
};

export default Project;
