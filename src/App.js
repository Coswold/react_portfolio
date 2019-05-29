import React, { Component } from 'react';
import './App.css';

import Navbar from './components/navbar'
import Main from './components/main'
import Projects from './components/projects'
import Contact from './components/contact'

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
