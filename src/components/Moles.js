import React, { Component } from 'react';
import Mole from './Mole';

/*
Moles Component
Description: Renders the Moles to be wacked. passes wack function to Mole
Author: Gabriel Yip
Creation Date: March 12th 2018
*/
class Moles extends Component {
  // render a mole with wack function
  renderMole(i) {
    return (
      <Mole molePosition={this.props.moles[i].position} onClick={() => this.props.onClick(i)}/>
    )
  }

  // render Moles
  render() {
    return (
      <div className="Moles">
        <div className="molesRow">
          {this.renderMole(0)}
          {this.renderMole(1)}
          {this.renderMole(2)}
        </div>
        <div className="molesRow">
          {this.renderMole(3)}
          {this.renderMole(4)}
          {this.renderMole(5)}
        </div>
        <div className="molesRow">
          {this.renderMole(6)}
          {this.renderMole(7)}
          {this.renderMole(8)}
        </div>
        
      </div>
    );
  }
}

export default Moles;