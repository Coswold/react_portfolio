import React, { Component } from "react";
import '../cards.css';
import img from "../logo8.png";

class Projects extends Component {
  render() {
    return (
      <div>

        <div class="topic bgb">
            <h2>PROJECTS</h2>
            <p>Here are some of the projects I have been working on:</p>
        </div>

        <div class="title fontb">
            <h3>Machine Learning</h3>
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

            <div class="title fontb">
                <h3>Web</h3>
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
