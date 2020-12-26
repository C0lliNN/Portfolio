import React from 'react';
import window from 'global';
import Container from '../components/Container/Container';
import Sidebar from '../components/Sidebar/Sidebar';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import { IntlProvider } from 'react-intl-hooks';
import messages_pt from '../translations/pt.json';
import messages_en from '../translations/en.json';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';
import '../assets/sass/resume.scss';

const messages = {
  pt: messages_pt,
  en: messages_en
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
