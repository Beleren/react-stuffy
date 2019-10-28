import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './Home.scss';
import About from './components/About';
import Skills from './components/Skills';
import Service from './components/Service';
import Nav from './components/Nav';

const Home = () => {
  return (
    <div className="home">
      <div className="home__content">
        <Switch>
          <Route path="/service" component={Service} />
          <Route path="/skills" component={Skills} />
          <Route path="/" component={About} />
        </Switch>
      </div>
      <Nav />
    </div>
  );
};

export default Home;
