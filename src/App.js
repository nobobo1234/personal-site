import React, { Component } from 'react';
import './abstracts.scss';
import './App.scss';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Speciality from './components/Speciality/Speciality';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*# Navbar with nice logo (cta button)*/}
        <Navbar />
        {/*# Header (introduction) (cta button)*/}
        <Header />
        {/*# About Me with photo (resume)*/}
        <About />
        {/*# Speciality*/}
        <Speciality />
        {/*# Portfolio*/}
        <Portfolio />
        {/*# Contact me*/}
        <Contact />
        {/*# Footer with social account and contact information*/}
        <Footer />
      </div>
    );
  }
}

export default App;
