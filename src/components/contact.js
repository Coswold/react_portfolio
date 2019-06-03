import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../status.css';

class Contact extends Component {
  render() {
    return (
      <div>
        <div class="topic bgy">
            <h2>GET IN TOUCH</h2>
            <p>Contact about software engineering, machine learning, start-ups,
            or even your journey into tech. Connect with me on LinkedIn and feel
             free to follow me on Medium and Github. If you want a more direct
             contact, shoot me an email.</p>
             <p>All of the links are to the left, just click on the associated
             icon. Thanks for stopping by!</p>
        </div>

        <div class="title fonty padding">
            <h3><span>Status</span></h3>
        </div>

        <div class="status_setting">
            <div class="status-row">
              <div class="status-column">
                <div class="status">
                  <ul>
                    <li><FontAwesomeIcon icon="briefcase" size='5x' color='white' />
                    <h3>Currently Searching for a Software Engineering Position</h3></li>
                    <li class="padding-top"><FontAwesomeIcon icon="coffee" size='5x' color='white' />
                    <h3>Open to coffee chats</h3></li>
                  </ul>
                </div>
              </div>

             </div>
        </div>

      </div>
    );
  }
}

export default Contact;
