import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Demo from './components/Demo';
import Gallery from './components/Gallery';
import Biography from './components/Biography';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Demo />
      <Gallery />
      <Biography />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
