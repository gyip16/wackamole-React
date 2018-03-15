import React, { Component } from 'react';
import Score from './Score';
import Time from './Time';

/*
ScoreBoard Component
Description: Holds Time and Score
Author: Gabriel Yip
Creation Date: March 12th 2018
*/
class ScoreBoard extends Component {
  render() {
    return (
      <div className="ScoreBoard">
        <Time time={this.props.time}/>
        <Score score={this.props.score}/>
      </div>
    );
  }
}

export default ScoreBoard;