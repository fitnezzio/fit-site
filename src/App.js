import React from 'react';

import 'assets/bootstrap.min.css'

import AboutApp from 'components/AboutApp';
import Features from 'components/Features';
import Gallery from 'components/Gallery';
import Contact from './components/Contact';
import Header from './components/Header';

const App = () => (
  <div className="App">
    <Header/>
    <AboutApp id='about-app'/>
    <Features id='features'/>
    <Gallery id='gallery'/>
    <Contact id='contact'/>
  </div>
);

export default App;
