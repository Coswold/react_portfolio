import React, { Component } from "react";
import '../cards.css';
import dbapi from "../DBAPI.png";
import calc from "../calc.png";
import stw from "../stw.png";
import lib from "../lib.png";
import ldg from "../loading.jpg";
import cp from "../cp.png";
import capi from "../capi.png";
import wh from "../WH.png";

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
                  <img src={wh} />
                  <h3>Wild Horses</h3>
                  <p>Short student film, Directed by George Miller, Filmed by Molly Kercheval</p>
                  <a href="https://www.youtube.com/watch?v=URC-Lny3GUs" target="_blank">
                    <button class="button whole">Watch</button>
                  </a>
                </div>
              </div>

              <div class="column">
                <div class="card card-padding">
                  <img src={cp} />
                  <h3>Crazy Philosopher</h3>
                  <p>Sentence generator built with: Python, Flask, Heroku, Bootstrap</p>
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
                  <img src={dbapi} />
                  <h3>Dragon Ball API</h3>
                  <p>Character API built with: RESTful practices, Node.js, MongoDB, Heroku, Bootstrap</p>
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
                  <p>Interactive math game built with: Node.js, Express, MongoDB, Socket.io,
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
                  <p>Desktop application for keeping tack of books built with:
                    JavaScript, Electron, HTML/CSS</p>
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
                  <img src={capi} />
                  <h3>Capital API</h3>
                  <p>State capital API built with: Python, RESTful practices,
                    MongoDB, Heroku, Flask</p>
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
                  <img src={stw} />
                  <h3>Slay the Wompum</h3>
                  <p>Terminal based dungeon crawler game built with: JavaScript</p>
                  <a href="https://github.com/Coswold/slay_the_wompum" target="_blank">
                    <button class="button left">Download</button>
                  </a>
                  <a href="https://github.com/Coswold/slay_the_wompum" target="_blank">
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
