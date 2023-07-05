import React, { Component } from 'react';
import Footer from './footer';

import About from './about';
import PracticeAreas from './practice';

import Contact from './contact.js';

class App extends Component {
  render() {
    return (
      <div>
       
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