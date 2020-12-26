import React from 'react';
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faVuejs,
  faSass,
  faPhp,
  faLaravel,
  faBootstrap,
  faNode
} from '@fortawesome/free-brands-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormatMessage } from 'react-intl-hooks';

const Skills = () => {
  const formatMessage = useFormatMessage();

  const skills = [
    { icon: faHtml5 },
    { icon: faCss3Alt },
    { icon: faSass },
    { icon: faBootstrap },
    { icon: faJsSquare },
    { icon: faReact },
    { icon: faVuejs },
    { icon: faNode },
    { icon: faPhp },
    { icon: faLaravel }
  ];

  const workflow = [
    {
      text: formatMessage({
        id: 'Mobile-First, Responsive Design',
        defaultMessage: 'Mobile-First, Responsive Design'
      }).toLocaleString()
    },
    {
      text: formatMessage({
        id: 'Agile Development',
        defaultMessage: 'Agile Development'
      }).toLocaleString()
    },
    {
      text: formatMessage({
        id: 'Test-Driven-Development',
        defaultMessage: 'Test-Driven-Development'
      }).toLocaleString()
    }
  ];

  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="skills"
    >
      <div className="w-100">
        <h2 className="mb-5">
          {formatMessage({
            id: 'Skills',
            defaultMessage: 'Skills'
          })}
        </h2>
        <div className="subheading mb-3">
          {formatMessage({
            id: 'Languages',
            defaultMessage: 'Languages'
          })}{' '}
          &amp; {formatMessage({ id: 'Tools', defaultMessage: 'Tools' })}
        </div>
        <ul className="list-inline dev-icons">
          {skills.map((item, index) => (
            <li className="list-inline-item" key={index}>
              <i>
                <FontAwesomeIcon icon={item.icon} />
              </i>
            </li>
          ))}
        </ul>

        <div className="subheading mb-3">
          {formatMessage({
            id: 'Workflow',
            defaultMessage: 'Workflow'
          })}
        </div>
        <ul className="fa-ul mb-0 list-none ml-0">
          {workflow.map((item, index) => (
            <li className="" key={index}>
              <FontAwesomeIcon icon={faCheck} />
              &nbsp;{item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
