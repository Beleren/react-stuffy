import React from 'react';
import Helmet from 'react-helmet';
import Home from './scenes/Home';
import './App.scss';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Who am i?</title>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          href="https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Home />
    </>
  );
};

export default App;
