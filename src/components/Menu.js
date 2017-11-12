import React, { Component } from 'react';

export default class Menu extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false,
      display: 'none',
    } 
  }

  onMenuClick = (e) => {
    if (e.target.id !== '') {
      this.props.onChangeView(e.target.id)
    }
    this.setState({menuOpen: !this.state.menuOpen})
  }

  render() {
    const { menuOpen } = this.state;
    return (
      <div>
        <button
          className="menu-button"
          onClick={this.onMenuClick}
        >
          {menuOpen ? 'X' : '|||' }  
        </button>
        <ul className="menu" style={menuOpen ? {display: 'block'} : {display: 'none'}}>
          <li id="om" onClick={this.onMenuClick} >Om Oss</li>
          <li id="stadgar" onClick={this.onMenuClick} >Stadgar</li>
          <li id="medlemmar" onClick={this.onMenuClick} >Medlemmar</li>
          <li id="bilder" onClick={this.onMenuClick} >Bilder</li>
        </ul>
      </div>
    );
  }
}