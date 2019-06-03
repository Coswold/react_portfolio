import React, { Component } from "react";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Main from "./main";
import Projects from "./projects";
import Contact from "./contact";

import img from "../logo8.png";
import Social from './social';

class Navbar extends Component {

    render() {
        return (
            <HashRouter>
            <div>
              <div className="sidenav">
                  <img class="profile" src={img} />
                  <a class="ni"><NavLink exact to="/">About</NavLink></a>
                  <a class="ni"><NavLink to="/stuff">Projects</NavLink></a>
                  <a class="ni"><NavLink to="/contact">Contact</NavLink></a>
                  <Social />
              </div>
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
