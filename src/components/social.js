import React, { Component } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Social extends Component {
  render() {
    return (
      <div>
        <div class="logo-container row">
            <div class="padding-top">
                <a href="https://www.github.com/coswold" target="_blank">
                    <FontAwesomeIcon icon={['fab', 'github']} size='3x' color='white' />
                </a>
                <a href="https://medium.com/@connor.oswold" target="_blank" class="padding-left">
                    <FontAwesomeIcon icon={['fab', 'medium']} size='3x' color='white' />
                </a>
            </div>
            <div class="padding-top">
                <a href="https://coswold.github.io/knowledge_base/#/" target="_blank">
                    <FontAwesomeIcon icon={['fas', 'brain']} size='3x' color='white' />
                </a>
                <a href="mailto:connor.oswold@wsu.edu" class="padding-left">
                    <FontAwesomeIcon icon="envelope" size='3x' color='white' />
                </a>
            </div>
        </div>
      </div>
    );
  }
}

export default Social;
