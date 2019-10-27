import React, { useState } from 'react';
import './Home.scss';
import About from './components/About';
import Skills from './components/Skills';
import Service from './components/Service';

const Home = () => {
  const [currentSection, setCurrentSection] = useState(About);
  return (
    <div className="home">
      <div className="home__content">{currentSection}</div>
      <nav className="home__nav">
        <ul>
          <li onClick={() => setCurrentSection(About)}>Who am i?</li>
          <li onClick={() => setCurrentSection(Skills)}>What can i do?</li>
          <li onClick={() => setCurrentSection(Service)}>
            How can i help you?
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
