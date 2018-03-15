import React, { Component } from 'react';

/*
Time Component
Description: Displays the remaining time in the game.
Author: Gabriel Yip
Creation Date: March 12th 2018
*/
class Time extends Component {
  render() {
    return (
      <div className="Time">
        Time: {this.props.time}
      </div>
    );
  }
}

export default Time;