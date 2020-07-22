import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

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
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/demo' component={Demo} />
        <Home />
        <Demo />
        <Gallery />
        <Biography />
        <Portfolio />
        <Contact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
