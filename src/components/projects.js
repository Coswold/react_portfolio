import React, { Component } from "react";
import '../cards.css';

class Projects extends Component {
  render() {
    return (
      <div class="card_setting">
        <h2>PROJECTS</h2>
        <p>Here are some of the projects I have been working on:</p>

        <div class="row">
          <div class="column">
            <div class="card">
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
    );
  }
}

export default Projects;
