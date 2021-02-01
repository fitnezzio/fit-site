import React from 'react';

import 'assets/bootstrap.min.css'

import AboutApp from 'containers/AboutApp';
import Features from 'containers/Features';
import Gallery from 'containers/Gallery';
import Contact from 'containers/Contact';
import Header from 'components/Header';
import Team from './containers/Team';

const App = () => (
  <div style={{backgroundColor: '#eee'}}>
    <Header/>
    <AboutApp id='about-app'/>
    <Features id='features'/>
    <Gallery id='gallery'/>
    <Team id='team'/>
    <Contact id='contact'/>
  </div>
);

export default App;
