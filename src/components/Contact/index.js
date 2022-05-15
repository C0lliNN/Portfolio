import React from 'react';
import { useFormatMessage } from 'react-intl-hooks';
import config from '../../../config';

const Contact = () => {
  const formatMessage = useFormatMessage();

  return (
    <section
      className="portfolio-section p-3 p-lg-5 d-flex align-items-start"
      id="contact"
    >
      <div className="w-100">
        <h2>
          {formatMessage({
            id: 'Contact',
            defaultMessage: 'Contact'
          })}
        </h2>
        <p className="lead">
          {formatMessage({
            id: 'Email',
            defaultMessage: 'Email'
          })}
          {': '}
          <a href={`mailto:${config.email}`} target="_blank" rel="noreferrer">{config.email}</a>
        </p>
        <p className='lead'>
          LinkedIn
          {': '}
          <a href="https://www.linkedin.com/in/raphael-collin-0b770319a/" target="_blank" rel="noreferrer">Raphael Collin</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
