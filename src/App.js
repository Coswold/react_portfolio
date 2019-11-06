import React, { Component } from 'react';
import './App.css';

import Navbar from './components/navbar';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faMedium, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMusic, faBriefcase, faGraduationCap, faHandRock, faStar, faTableTennis, faBook, faCoffee, faEnvelope, faMotorcycle, faPlaneDeparture, faBrain } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faBriefcase, faHandRock, faGraduationCap, faStar, faMusic, faTableTennis, faBook, faPlaneDeparture, faMotorcycle, faMedium, faCoffee, faGithub, faBrain, faEnvelope)

class App extends Component {
    render() {
        return (
          <div className="App">
            <Navbar />
          </div>
      );
    }
}

export default App;
