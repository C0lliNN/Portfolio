import PropTypes from 'prop-types';
import React from 'react';
import classes from './styles.module.scss';
import { useFormatMessage } from 'react-intl-hooks';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Project = (props) => {
  const formatMessage = useFormatMessage();
  return (
    <article className={classes.Project}>
      <div className={classes.ImageDiv}>
        <img src={props.img} alt={`Raphael Collin - ${props.title}`} />
      </div>
      <div className="mx-3 mx-md-0">
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
          {formatMessage({
            id: 'Source Code',
            defaultMessage: 'Source Code'
          })}
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
