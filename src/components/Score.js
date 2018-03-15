import React, { Component } from 'react';

/*
Score Component
Description: Holds the user's score
Author: Gabriel Yip
Creation Date: March 12th 2018
*/
class Score extends Component {
  render() {
    return (
      <div className="Score">
        Score: {this.props.score}
      </div>
    );
  }
}

export default Score;