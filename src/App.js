import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import Auth from './components/Auth/Auth';
import Browsing from './components/Browsing/Browsing';
import Details from './components/Details/Details';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div >
          <Switch>
            <Route component={Auth} path="/" exact />
            <Route component={Browsing} path='/browsing' />
            <Route component={Details} path='/details' />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
