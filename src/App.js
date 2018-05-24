import React, { Component } from 'react';

import './App.css';
import Main from './Main'
import Signin from './SignIn'

class App extends Component {
  state = {
    uid: null,
  }

  handleAuth = () => {
    this.setState({uid: 'something'})
  }

  signedIn = () => {
    return this.state.uid
  }

  signOut = () => {
    this.setState({uid:null})
  }

  render() {
    return (
      <div className="App">
      {
        this.signedIn() 
        ? <Main signOut={this.signOut}/> 
        : <Signin handleAuth = {this.handleAuth}/>
      }
      </div>
    )
  }
}

export default App;
