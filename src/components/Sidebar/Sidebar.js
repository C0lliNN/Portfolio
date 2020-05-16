import React, { useState } from 'react';
import classes from './Sidebar.module.css';
import Scrollspy from 'react-scrollspy';
import Scroll from '../Scroll/Scroll';

import picture from '../../assets/img/profile_picture.png';
import config from '../../../config';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { injectIntl } from 'react-intl';

const Sidebar = (props) => {
  const tabs = useState([
    {
      content: props.intl.formatMessage({
        id: 'About Me',
        defaultMessage: 'About Me'
      }),
      href: 'about'
    },
    {
      content: props.intl.formatMessage({
        id: 'Projects',
        defaultMessage: 'Projects'
      }),
      href: 'projects'
    },
    {
      content: props.intl.formatMessage({
        id: 'Skills',
        defaultMessage: 'Skills'
      }),
      href: 'skills'
    },
    {
      content: props.intl.formatMessage({
        id: 'Contact',
        defaultMessage: 'Contact'
      }),
      href: 'contact'
    }
  ])[0];

  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    if (window.innerWidth < 992) {
      setExpanded((prevState) => {
        return !prevState;
      });
    }
  };

  return (
    <Navbar
      variant="dark"
      expand="lg"
      fixed="top"
      bg="primary"
      className={classes.Navbar}
      expanded={expanded}
    >
      <Navbar.Brand href="#page-top" className={classes.Brand}>
        <span className="d-block d-lg-none">
          {config.firstName} {config.lastName}
        </span>
        <span className="d-none d-lg-block">
          <img
            className={`img-fluid ${classes.Profile} rounded-circle mx-auto mb-2`}
            src={picture}
            alt=""
          />
        </span>
      </Navbar.Brand>
      <Navbar.Toggle
        type="button"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        className={classes.Toggler}
        onClick={toggleExpanded}
      >
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="navbarSupportedContent" className={classes.Collapse}>
        <Scrollspy
          items={tabs.map((s) => s.href)}
          currentClassName="active"
          offset={-300}
          className="navbar-nav"
        >
          {tabs.map((tab, i) => {
            const { href, content } = tab;
            return (
              <Nav.Item key={href} onClick={toggleExpanded}>
                <Scroll type="id" element={href}>
                  <Nav.Link href={`#${href}`} className={classes.Link}>
                    {content}
                  </Nav.Link>
                </Scroll>
              </Nav.Item>
            );
          })}
        </Scrollspy>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default injectIntl(Sidebar);
