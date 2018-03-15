import React, { Component } from 'react';
import * as constants from '../config/constants';
import moleSprite from '../Assets/images/MoleSS.png';

/* Mole Component
Description: A single Mole
*/
class Mole extends Component {
  render() {
    // this determines which sprite to grab on the sprite sheet
    var spritePosition = -800 + (constants.SPRITE_SIZE * this.props.molePosition);
    // adding sprite to button as background
    var spriteStyling = {
      background: 'url('+moleSprite+')',
      backgroundPosition: spritePosition + 'px 0px'
    }

    return (
      <button className="Mole" style={spriteStyling} onClick={() => this.props.onClick()}>
      </button>
    );
  }
}

export default Mole;