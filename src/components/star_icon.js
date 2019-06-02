import React, { Component } from "react";
import star from "../star-2-32.ico";

class StarIcon extends Component {
  render() {
    return (
      <div>
        <div class="image-center">
            <img src={star} />
        </div>
      </div>
    );
  }
}

export default StarIcon;
