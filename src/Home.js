import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

import About from './components/About';
import PracticeAreas from './components/PracticeAreas';

import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <About />
        <PracticeAreas />
      
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;