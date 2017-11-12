import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import Bilder from './components/Bilder';
import Om from './components/Om';
import Stadgar from './components/Stadgar';
import Medlemmar from './components/Medlemmar';
import logo from './logo_white.svg';
class App extends Component {

  constructor() {
    super();

    this.state = {
      view: ''
    }
  }

  onChangeView = (view) => {
    this.setState({view})
  }

  renderView() {
    switch (this.state.view) {
      case 'om':
        return <Om />
      case 'stadgar':
        return <Stadgar />
      case 'medlemmar':
        return <Medlemmar />
      case 'bilder':
        return <Bilder />
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="row">
            <div 
              className="col d-none d-md-block d-lg-block"
            >  
              <img onClick={() => { window.location = "/" }} className="header-logo" src={logo} alt="logo"/>
            </div>
            <div 
              className="col-md-6 d-none d-md-block d-lg-block"
            >
            </div>
            <div 
              className="col"
            >
              <Menu onChangeView={this.onChangeView}/>
            </div>
          </div>
        </header>
          {this.state.view === '' && <img className="main-logo" src={logo} alt="logo" /> }
        <div className="content-box">
          {this.renderView()}
        </div>
      </div>
    );
  }
}

export default App;
