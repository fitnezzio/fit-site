import React from 'react';

import 'assets/bootstrap.min.css'

import AboutApp from 'components/AboutApp';
import Features from 'components/Features';
import Gallery from 'components/Gallery';

const App = () => (
  <div className="App">
    <AboutApp/>
    <Features/>
    <Gallery/>
  </div>
);

export default App;
