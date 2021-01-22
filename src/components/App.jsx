import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Home from './Home';

function App() {
  return (
    <div> 
      <Navbar />
      <Home />
      <About />
      {/* <Contact /> */}
      <Footer />
    </div>);
}

export default App;