import React, { Component } from "react";
import '../cards.css';
import dbapi from "../DBAPI.png";
import calc from "../calc.png";
import stw from "../stw.png";
import lib from "../lib.png";
import ldg from "../loading.jpg";

class Projects extends Component {

  render() {
    return (
      <div>


        <div class="title fontb padding">
            <h3><span>Projects</span></h3>
        </div>

        <div class="card_setting">
            <div class="row">
              <div class="column">
                <div class="card card-padding">
                  <img src={ldg} />
                  <h3>Tweet Generator</h3>
                  <p>Python, Flask, Heroku, Bootstrap</p>
                  <a href="https://philosopher-gen.herokuapp.com" target="_blank">
                    <button class="button left">Visit</button>
                  </a>
                  <a href="https://github.com/Coswold/tweet_generator" target="_blank">
                    <button class="button right">Code</button>
                  </a>
                </div>
              </div>

              <div class="column">
                <div class="card">
                  <img src={ldg} />
                  <h3>State Capital API</h3>
                  <p>Python, RESTful practices, MongoDB, Heroku, Flask</p>
                  <a href="https://capitals-api.herokuapp.com/" target="_blank">
                    <button class="button left">Visit</button>
                  </a>
                  <a href="https://github.com/Coswold/api_challenge" target="_blank">
                    <button class="button right">Code</button>
                  </a>
                </div>
              </div>

              <div class="column">
                <div class="card">
                  <img src={dbapi} />
                  <h3>Dragon Ball API</h3>
                  <p>RESTful practices, Node.js, MongoDB, Heroku, Bootstrap</p>
                  <a href="https://dragon-ball-api.herokuapp.com/" target="_blank">
                    <button class="button left">Visit</button>
                  </a>
                  <a href="https://github.com/Coswold/Dragon_Ball_API" target="_blank">
                    <button class="button right">Code</button>
                  </a>
                </div>
              </div>

              <div class="column">
                <div class="card">
                  <img src={calc} />
                  <h3>Calcmon</h3>
                  <p>Node.js, Express, Express-Handlebars, MongoDB, Socket.io,
                  Heroku</p>
                  <a href="https://calcumongame.herokuapp.com/" target="_blank">
                    <button class="button left">Visit</button>
                  </a>
                  <a href="https://github.com/Coswold/Calcumon" target="_blank">
                    <button class="button right">Code</button>
                  </a>
                </div>
              </div>

             </div>

            <div class="row">
              <div class="column">
                <div class="card">
                  <img src={lib} />
                  <h3>RoboLib</h3>
                  <p>JavaScript, Electron, HTML/CSS</p>
                  <a href="https://github.com/Coswold/electron_app" target="_blank">
                    <button class="button left">Download</button>
                  </a>
                  <a href="https://github.com/Coswold/electron_app" target="_blank">
                    <button class="button right">Code</button>
                  </a>
                </div>
              </div>

              <div class="column">
                <div class="card">
                  <img src={stw} />
                  <h3>Slay the Wompum</h3>
                  <p>JavaScript</p>
                  <a href="https://github.com/Coswold/slay_the_wompum" target="_blank">
                    <button class="button left">Download</button>
                  </a>
                  <a href="https://github.com/Coswold/slay_the_wompum" target="_blank">
                    <button class="button right">Code</button>
                  </a>
                </div>
              </div>

              <div class="column">
                <div class="card">
                  <img src={ldg} />
                  <h3>In Progress</h3>
                  <p>Python</p>
                  <a href="https://www.github.com/coswold" target="_blank">
                    <button class="button left">Visit</button>
                  </a>
                  <a href="https://www.github.com/coswold" target="_blank">
                    <button class="button right">Code</button>
                  </a>
                </div>
              </div>

              <div class="column">
                <div class="card">
                  <img src={ldg} />
                  <h3>In Progress</h3>
                  <p>Python</p>
                  <a href="https://www.github.com/coswold" target="_blank">
                    <button class="button left">Visit</button>
                  </a>
                  <a href="https://www.github.com/coswold" target="_blank">
                    <button class="button right">Code</button>
                  </a>
                </div>
              </div>

            </div>

        </div>
      </div>
    );
  }
}

export default Projects;
