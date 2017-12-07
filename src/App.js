import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route, Switch } from "react-router-dom";
import Auth from './components/Auth/Auth';
import Browsing from './components/Browsing/Browsing';
import Details from './components/Details/Details';
import Employees from './components/Employees/Employees';
import Individual from './components/Individual/Individual';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div >
          <Switch>
            <Route component={Auth} path="/" exact />
            <Route component={Browsing} path='/browsing' />
            <Route component={Details} path='/details' />
            <Route component={Employees} exact path='/employees'/>
            <Route component={Individual} path='/employees/:id' />
            <Route path='/render' render={() =><h1>This is the render page.</h1>}/>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
