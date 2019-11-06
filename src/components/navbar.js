import React, { Component } from "react";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Main from "./main";
import Projects from "./projects";
import Contact from "./contact";

import img from "../0.jpeg";
import Social from './social';
import '../index.css';

import scrollToComponent from 'react-scroll-to-component';

class Navbar extends Component {

    render() {
        return (
            <div>
              <div className="sidenav">
                  <img class="profile" src={img} />
                  <a href="#" onClick={() => scrollToComponent(this.About,
                      { offset: 0, align: 'top', duration: 1500})} class="ni"
                      >About</a>
                  <a href="#" onClick={() => scrollToComponent(this.Projects,
                      { offset: 0, align: 'top', duration: 1500})} class="ni"
                      >Projects</a>
                  <a href="#" onClick={() => scrollToComponent(this.Contact,
                      { offset: 0, align: 'top', duration: 1500})} class="ni"
                      >Contact</a>
                  <Social />
              </div>

              <div className="content">
                <section className='About' ref={(section) => { this.About = section; }}>
                    <Main />
                </section>

                <section className='Projects' ref={(section) => { this.Projects = section; }}>
                    <Projects />
                </section>

                <section className='Contact' ref={(section) => { this.Contact = section; }}>
                    <Contact />
                </section>
              </div>

            </div>
        )
    }
}

export default Navbar
