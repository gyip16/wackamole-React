import React, { Component } from 'react';
import GameArea from './GameArea';

/* Game
Description: Holds Game Area
Author: Gabriel Yip
Creation Date: March 12th 2018
*/
class Game extends Component {
  render() {
    return (
      <div className="Game">
        <GameArea />
      </div>
    );
  }
}

export default Game;