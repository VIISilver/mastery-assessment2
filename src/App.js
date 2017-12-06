import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route } from "react-router-dom";
import Auth from './components/Auth/Auth';
import Browsing from './components/Browsing/Browsing';
import Details from './components/Details/Details';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div >
          <Route component={Auth} path="/" exact />
          <Route component={Browsing} path='/browsing' />
          <Route component={Details} path='/details' />
        </div>
      </HashRouter>
    );
  }
}

export default App;
