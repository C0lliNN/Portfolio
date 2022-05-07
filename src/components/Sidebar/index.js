import React, { useState } from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from '../Scroll';

import picture from '../../assets/img/profile_picture.png';
import config from '../../../config';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useFormatMessage } from 'react-intl-hooks';

const Sidebar = () => {
  const formatMessage = useFormatMessage();

  const tabs = useState([
    {
      content: formatMessage({
        id: 'About Me',
        defaultMessage: 'About Me'
      }).toLocaleString(),
      href: 'about'
    },
    {
      content: formatMessage({
        id: 'Experience',
        defaultMessage: 'Experience'
      }),
      href: "experience"
    },
    {
      content: formatMessage({
        id: 'Projects',
        defaultMessage: 'Projects'
      }).toLocaleString(),
      href: 'projects'
    },
    {
      content: formatMessage({
        id: 'Skills',
        defaultMessage: 'Skills'
      }).toLocaleString(),
      href: 'skills'
    },
    {
      content: formatMessage({
        id: 'Contact',
        defaultMessage: 'Contact'
      }).toLocaleString(),
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
      id="sideNav"
      expanded={expanded}
    >
      <Navbar.Brand href="#page-top" >
        <span className="d-block d-lg-none">
          {config.firstName} {config.lastName}
        </span>
        <span className="d-none d-lg-block">
          <img
            className={`img-fluid img-profile rounded-circle mx-auto mb-2`}
            src={picture}
            alt=""
          />
        </span>
      </Navbar.Brand>
      <Navbar.Toggle
        type="button"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        onClick={toggleExpanded}
      >
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="navbarSupportedContent">
        <Scrollspy
          items={tabs.map((s) => s.href)}
          currentClassName="active"
          offset={-300}
          className="navbar-nav"
        >
          {tabs.map((tab) => {
            const { href, content } = tab;
            return (
              <Nav.Item key={href} onClick={toggleExpanded}>
                <Scroll type="id" element={href}>
                  <Nav.Link href={`#${href}`}>
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

export default Sidebar;
