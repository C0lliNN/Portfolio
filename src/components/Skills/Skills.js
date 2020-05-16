import React from 'react';
import classes from './Skills.module.css';
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faSass,
  faNpm,
  faGit
} from '@fortawesome/free-brands-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormattedMessage, injectIntl } from 'react-intl';

const Skills = (props) => {
  const programmingLanguages = [
    { icon: faHtml5 },
    { icon: faCss3Alt },
    { icon: faSass },
    { icon: faJsSquare },
    { icon: faReact },
    { icon: faNpm },
    { icon: faGit }
  ];

  const workflow = [
    {
      text: props.intl.formatMessage({
        id: 'MobileFirst',
        defaultMessage: 'Mobile-First, Responsive Design'
      })
    },
    {
      text: props.intl.formatMessage({
        id: 'AgileDevelopment',
        defaultMessage: 'Agile Development'
      })
    },
    {
      text: props.intl.formatMessage({
        id: 'TestDrivenDevelopment',
        defaultMessage: 'Test-Driven-Development'
      })
    }
  ];

  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="skills"
    >
      <div className="w-100">
        <h2 className="mb-5">
          <FormattedMessage id="Skills" defaultMessage="Skills" />
        </h2>

        <div className="SubHeading mb-3">
          <FormattedMessage
            id="ProgrammingLanguages"
            defaultMessage="Programming Languages"
          />{' '}
          &amp; <FormattedMessage id="Tools" defaultMessage="Tools" />
        </div>
        <ul className="list-inline">
          {programmingLanguages.map((item, index) => (
            <li className="list-inline-item" key={index}>
              <FontAwesomeIcon icon={item.icon} className={classes.SkillIcon} />
            </li>
          ))}
        </ul>

        <div className="SubHeading mb-3">
          <FormattedMessage id="Workflow" defaultMessage="Workflow" />
        </div>
        <ul className="fa-ul mb-0 list-none ml-0">
          {workflow.map((item, index) => (
            <li className={classes.WorkflowItem} key={index}>
              <FontAwesomeIcon icon={faCheck} />
              &nbsp;{item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default injectIntl(Skills);
