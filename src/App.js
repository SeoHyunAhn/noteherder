import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import './App.css';
import { auth } from './base'
import Main from './Main'
import SignIn from './SignIn'

class App extends Component {
  componentWillMount() {
    const uid = localStorage.getItem('userID')
    if (uid) {
      return this.setState({uid})
    }
    auth.onAuthStateChanged(user => {
      if (user) {
        this.handleAuth(user)
      } else {
        this.signOut()
      }
    })
  }
  state = {
    uid: null,
  }
  checkLocalStorage = () => {
    debugger
    const uid = window.localStorage.getItem('userID')
    if(uid){
      return this.setState({uid})
    }
  }
  handleAuth = (user) => {
    //.uid
    window.localStorage.setItem('userID', (user.uid))
    this.setState({ uid: user.uid })
  }

  signedIn = () => {
    return this.state.uid
  }

  signOut = () => {
    //null
    this.setState({ uid: null })
    window.localStorage.removeItem('userID')
    auth.signOut()
  }

  render() {
    // debugger
    return (
      <div className="App">
      <Switch>
        <Route path="/sign-in" render={()=> 
          this.signedIn() ? <Redirect to="/notes" /> : (<SignIn />)}/>
        <Route path="/notes" render={() => 
        this.signedIn() ? <Main signOut={this.signOut} uid={this.state.uid}/> : (<Redirect to="/sign-in"/>)}/>}/>
        <Route 
          render={() => (
            this.signedIn() ? <Redirect to="/notes" /> : <Redirect to="/sign-in" />
          )}
        />
      </Switch>
      </div>
      //   {      
      //     this.signedIn()
      //       ? <Main signOut={this.signOut} uid={this.state.uid} />
      //       : <SignIn handleAuth={this.handleAuth} />
      //   }
      
    )
  }
}

export default App;
