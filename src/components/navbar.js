import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Main from "./main";
import Projects from "./projects";
import Contact from "./contact";

class Navbar extends Component {

    render() {
        return (
            <HashRouter>
            <div>
              <h1>Portfolio</h1>
              <ul className="header">
                  <li><NavLink exact to="/">Home</NavLink></li>
                  <li><NavLink to="/stuff">Projects</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
              <div className="content">
                <Route exact path="/" component={Main}/>
                <Route path="/stuff" component={Projects}/>
                <Route path="/contact" component={Contact}/>
              </div>
            </div>
            </HashRouter>
        )
    }
}

export default Navbar
