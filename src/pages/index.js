import React from 'react';
import window from 'global';
import Container from '../components/Container';
import Sidebar from '../components/Sidebar';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import { IntlProvider } from 'react-intl-hooks';
import messages_pt from '../translations/pt.json';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import '../assets/sass/portfolio.scss';
import Experience from '../components/Experience';

const messages = {
  pt: messages_pt
};

const language = window.navigator
  ? window.navigator.language.split(/[-_]/)[0]
  : 'en';

const IndexPage = () => (
  <Container>
    <IntlProvider locale={language} messages={messages[language]}>
      <Sidebar />
      <div className="container-fluid p-0">
        <AboutMe />
        <hr className="m-0" />

        <Experience />
        <hr className="m-0" />

        <Projects />
        <hr className="m-0" />

        <Skills />
        <hr className="m-0" />

        <Contact />
      </div>
    </IntlProvider>
  </Container>
);

export default IndexPage;
