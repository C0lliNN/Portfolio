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
            <li>
              {formatMessage({
                id:
                  'Web development using technologies like PHP, Laravel, Vue.js, Bootstrap and Tailwind.',
                defaultMessage:
                  'Web development using technologies like PHP, Laravel, Vue.js, Bootstrap and Tailwind.'
              })}
            </li>
            <li>
              {formatMessage({
                id:
                  'Implementation of integrations with external services like Mercado Pago Payments, Stripe Subscriptions and Google Speech-Recognition.',
                defaultMessage:
                  'Implementation of integrations with external services like Mercado Pago Payments, Stripe Subscriptions and Google Speech-Recognition.'
              })}
            </li>
            <li>
              {formatMessage({
                id:
                  'Conducting meetings with customers to identify requirements and to present results.',
                defaultMessage:
                  'Conducting meetings with customers to identify requirements and to present results.'
              })}
            </li>
          </div>
          <div className="portfolio-date text-md-right">
            <span className="text-primary">
              {formatMessage({
                id: 'November 2020',
                defaultMessage: 'November 2020'
              })}
              {' - '}
              {formatMessage({
                id: 'May 2021',
                defaultMessage: 'May 2021'
              })}
            </span>
          </div>
        </div>
        <div className="portfolio-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div>
            <h3 className="mb-0">Fullstack Developer</h3>
            <div className="subheading mb-3">KiwiMe</div>
            <li>
              {formatMessage({
                id:
                  'KiwiMe is an online same-day delivery service.',
                defaultMessage:
                  'KiwiMe is an online same-day delivery service.'
              })}
            </li>
            <li>
              {formatMessage({
                id:
                  'Backend development using Java 11, Spring Framework 5, Spring Boot 2, PostgreSQL and Onion Architecture.',
                defaultMessage:
                  'Backend development using Java 11, Spring Framework 5, Spring Boot 2, PostgreSQL and Onion Architecture.'
              })}
            </li>
            <li>
              {formatMessage({
                id:
                  'Containerization using Docker, CI/CD with CircleCI and AWS as the Cloud Provider.',
                defaultMessage:
                  'Containerization using Docker, CI/CD with CircleCI and AWS as the Cloud Provider.'
              })}
            </li>
          </div>
          <div className="portfolio-date text-md-right">
            <span className="text-primary">
              {formatMessage({
                id: 'March 2021',
                defaultMessage: 'March 2021'
              })}
              {' - '}
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
