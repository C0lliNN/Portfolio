import React from 'react';
import { useFormatMessage } from 'react-intl-hooks';

const Experience = () => {
  const formatMessage = useFormatMessage();

  return (
    <section
      className="portfolio-section p-3 p-lg-5 d-flex align-items-center"
      id="experience"
    >
      <div className="w-100">
        <h2 className="mb-5">
          {formatMessage({
            id: 'Experience',
            defaultMessage: 'Experience'
          })}
        </h2>
        <div className="portfolio-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div>
            <h3 className="mb-0">Fullstack Web Developer</h3>
            <div className="subheading mb-3">Gestão Inteligente Software</div>
            <p>
              {formatMessage({
                id:
                  'Requirement Analysis and Implementation of Web Platform using PHP/Laravel, Vue.js e Bootstrap. Creation of system with Authentication e Authorization of multiple user roles using laravel-permissions. Analysis and deploy of Web Application with high availability and scalability in AWS using EC2, S3, RDS for MySQL, Load Balancer and Code Deploy.',
                defaultMessage:
                  'Requirement Analysis and Implementation of Web Platform using PHP/Laravel, Vue.js e Bootstrap. Creation of system with Authentication e Authorization of multiple user roles using laravel-permissions. Analysis and deploy of Web Application with high availability and scalability in AWS using EC2, S3, RDS for MySQL, Load Balancer and Code Deploy.'
              })}
            </p>
          </div>
          <div className="portfolio-date text-md-right">
            <span className="text-primary">
              {formatMessage({
                id: 'November',
                defaultMessage: 'November'
              })}{' '}
              2020 -{' '}
              {formatMessage({
                id: 'Present',
                defaultMessage: 'Present'
              })}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
