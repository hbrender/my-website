import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';

function App() {
  return (
    <div> 
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>);
}

export default App;