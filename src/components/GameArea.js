import React, { Component } from 'react';
import ScoreBoard from './ScoreBoard';
import Moles from './Moles';
import * as constants from '../config/constants';
import Smack from '../Assets/sounds/SMACK.wav';

/* 
GameArea
Description: Game State and Logic. Holds Scoreboard and Moles.
Author: Gabriel Yip
Creation Date: March 12th 2018
*/
class GameArea extends Component {
  constructor(props) {
    super(props);
    //game initial state
    this.state = {
      moles: [
        {mole: 0, position: 0, down: true, scoreable: false},
        {mole: 1, position: 0, down: true, scoreable: false},
        {mole: 2, position: 0, down: true, scoreable: false},
        {mole: 3, position: 0, down: true, scoreable: false},
        {mole: 4, position: 0, down: true, scoreable: false},
        {mole: 5, position: 0, down: true, scoreable: false},
        {mole: 6, position: 0, down: true, scoreable: false},
        {mole: 7, position: 0, down: true, scoreable: false},
        {mole: 8, position: 0, down: true, scoreable: false}
      ],
      time: constants.GAME_TIME,
      score: 0,
      GameStart: false
    }
    this.gameCountdown = this.gameCountdown.bind(this);
    this.spawner = this.spawner.bind(this);
    this.moleMovement = this.moleMovement.bind(this);
    this.wack = this.wack.bind(this);
    this.startGame = this.startGame.bind(this);
    //timers
    var gametimer = null;
    var spawntimer = null;
    var molestimer = null;
    //sounds
    var smacksound = new Audio(Smack);
  }

  //reset and readys the game
  readyGame() {
    if(!this.state.GameStart) {
      this.resetGame();
      setTimeout(this.startGame, 3500);
    }
  }

  //start the game
  startGame() {
    
      this.gametimer = setInterval(this.gameCountdown, 1000);
      this.spawntimer = setInterval(this.spawner, 250);
      this.molestimer = setInterval(this.moleMovement, 30);
      this.setState({GameStart: true});

  }

  //Spawner picks moles that will pop up or down
  spawner() {
    const rngSpawner = Math.floor(Math.random() * 9);
    var moles = this.state.moles.slice();
    //pop down
    if((moles[rngSpawner].scoreable && moles[rngSpawner].position === 10) || moles[rngSpawner.down]) {
      moles[rngSpawner].down = true;
      moles[rngSpawner].scoreable = false;
      this.setState({moles: moles});
    } else {
      //pop up
      if(moles[rngSpawner].position < 10) {
        moles[rngSpawner].down = false;
        moles[rngSpawner].scoreable = true;
        this.setState({moles: moles});
      }
    }
  }

  //game timer that the user sees
  gameCountdown() {
    var time = this.state.time;
    time--;
    if(this.state.time) {
      console.log(time);

      this.setState({time: time});
    } else {
      clearInterval(this.gametimer);
      clearInterval(this.spawntimer);
      clearInterval(this.molestimer);
      this.setState({GameStart: false});
    }
  }

  //Mole movement that is displayed via spritesheet
  moleMovement() {
    var moles = this.state.moles.slice();
    for(var mole of moles) {
      if(mole.scoreable && mole.position < 10) {
        mole.position++;
        //console.log('mpup: ' + mole.position);
      } else {
        if(!mole.scoreable && mole.position > 0) {
          mole.position--;
          //console.log('mpdown: ' + mole.position);
        }
      }
    }
  }

  //user wacking the mole
  wack(i) {
    var moles = this.state.moles.slice();
    var score = this.state.score;
    if(moles[i].scoreable) {
      moles[i].scoreable = false;
      score+=10;
      this.setState({score: score});
    }
  }

  //reset the game to initial state
  resetGame() {
    clearInterval(this.gametimer);
    clearInterval(this.spawntimer);
    clearInterval(this.molestimer);
    this.setState({
      GameStart: false,
      time: constants.GAME_TIME,
      moles: [
        {mole: 0, position: 0, down: true, scoreable: false},
        {mole: 1, position: 0, down: true, scoreable: false},
        {mole: 2, position: 0, down: true, scoreable: false},
        {mole: 3, position: 0, down: true, scoreable: false},
        {mole: 4, position: 0, down: true, scoreable: false},
        {mole: 5, position: 0, down: true, scoreable: false},
        {mole: 6, position: 0, down: true, scoreable: false},
        {mole: 7, position: 0, down: true, scoreable: false},
        {mole: 8, position: 0, down: true, scoreable: false}
      ],
      score: 0
    });
  }

  // Render
  render() {
    return (
      <div className="GameArea">
        <ScoreBoard time={this.state.time} score={this.state.score}/>
        <Moles moles={this.state.moles} onClick={this.wack}/>
        {this.state.GameStart ? <button onClick={() => this.resetGame()}>Reset</button> : <button onClick={() => this.readyGame()}>Start</button>}
      </div>
    );
  }
}

export default GameArea;