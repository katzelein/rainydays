import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import Login from './Login';

import Popover from 'material-ui/Popover';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

export default class AppBar extends React.Component {

  constructor () {
    super()
    this.state = {
      mood: '',
      logged: true,
      open: false,
    }
    this.signIn.bind(this)
    this.signOut.bind(this)
  }

  signIn = () => {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider)
  }

  signOut = () => {
    this.auth.signOut()
    console.log('you have successfully sign out')
  }



  handleClick = (event) => {
    event.preventDefault();

  }

  render() {

    return (
      <nav>
        <div id="nav-top">
          <Link to='/'><img src="/images/logo.png" alt="rainyDays: your emotional piggybank"/></Link>
          {!this.state.logged ?
            <FlatButton label="Login" style={{color: 'white'}} href="/login" onClick={this.signIn} />
            :
            <FlatButton label="Logout" style={{color: 'white'}} href="/logout" onClick={this.signOut} />
          }
        </div>
      </nav>
    )
  }
}

