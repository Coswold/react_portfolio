import React, { Component } from "react";
import '../cards.css';
import img from "../logo8.png";

class Projects extends Component {
  render() {
    return (
      <div>

        <div class="topic bgb padding">
            <h2>PROJECTS (UNDER CONSTRUCTION)</h2>
            <h3>Machine Learning, Web, and Native Apps</h3>
            <p>Here are some of my favorite projects. Many are complete, but
            some are still in progress. All are open source, so check them out
            and see if you'd like to contribute.</p>
        </div>

        <div class="title fontb padding">
            <h3><span>Machine Learning</span></h3>
        </div>

        <div class="card_setting">
            <div class="row">
              <div class="column">
                <div class="card">
                  <img src={img} />
                  <h3>Card 1</h3>
                  <p>Some text</p>
                  <p>Some text</p>
                </div>
              </div>

              <div class="column">
                <div class="card">
                  <h3>Card 2</h3>
                  <p>Some text</p>
                  <p>Some text</p>
                </div>
              </div>
            </div>

            <div class="title fontb padding">
                <h3><span>Web</span></h3>
            </div>

            <div class="row">
                <div class="column">
                  <div class="card">
                    <h3>Card 3</h3>
                    <p>Some text</p>
                    <p>Some text</p>
                  </div>
                </div>

                <div class="column">
                  <div class="card">
                    <h3>Card 4</h3>
                    <p>Some text</p>
                    <p>Some text</p>
                  </div>
                </div>

            </div>
        </div>

      </div>
    );
  }
}

export default Projects;
