import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../status.css';

class Contact extends Component {
  render() {
    return (
      <div class="padding-top">
        <div class="topic bgy">
            <h2>GET IN TOUCH</h2>
            <p>I'm always looking for exciting projects to work on and help out with.
            Whether it's an acting role, writing a blog or screenplay, or creating an app or website,
            send information on the details.</p>

            <p>Connect with me through email and feel free to follow me on Medium and Github.
            Links to the left are Github, Medium, my knowledge base, and email. Thanks for stopping by!</p>
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
                    <h3>Currently in Seattle</h3></li>
                    <li class="padding-top"><FontAwesomeIcon icon="coffee" size='5x' color='white' />
                    <h3>Always Open to Coffee Chats</h3></li>
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
