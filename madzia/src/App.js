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
import SideMenu from './components/SideMenu';
import Backdrop from './components/Backdrop';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/demo' component={Demo} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/biography' component={Biography} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </BrowserRouter>
    <Backdrop />
    </>
  );
}

export default App;
