import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import HomeScreen from './screens/Home';
import VolunteerScreen from './screens/Volunteer';
import NeedsScreen from './screens/Needs';
import HelpScreen from './screens/Help';
import Navbar from './components/Navbar';
import logo from './logo.png';
import './Metro.css';

class App extends Component {
  render() {
    return (
      <div className="metro">
        <header className="container metro-header">
          <Link to="/" className="metro-header__logolink">
            <img src={logo} alt="metropolitian ministries logo" className="metro-header__logo"/>
          </Link>
          <Navbar />
        </header>
        <main>
          <Switch>
            <Route path="/help" component={HelpScreen} />
            <Route path="/volunteer" component={VolunteerScreen} />
            <Route path="/goodsamaritan" component={NeedsScreen} />
            <Route path="/" component={HomeScreen} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
