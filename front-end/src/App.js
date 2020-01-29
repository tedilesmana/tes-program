import React, { Component } from 'react';
import VHome from './view/VHome';
import Navbar from './component/home/Navbar';
import { Switch, Route } from "react-router-dom";
import './assets/css/style.css';


class App extends Component {

  render() {
    return (
      <div>
      <Navbar />
        <Switch>
          <Route path="/" exact><VHome /></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
