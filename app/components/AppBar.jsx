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

import firebase from 'firebase'

export default class AppBar extends React.Component {

  // create firebase auth
  auth = firebase.auth();
  database = firebase.database();
  storage = firebase.storage()

  constructor () {
    super()
    this.state = {
      mood: '',
      logged: false,
      open: false,
    }
    this.signIn.bind(this)
    this.signOut.bind(this)
  }

  signIn = () => {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider)
    this.setState({
      logged: true
    })
  }

  signOut = () => {
    firebase.auth().signOut()
    this.setState({
      logged: false
    })
    console.log('You\'re now logged out')
  }

  render() {

    return (
      <nav>
        <div id="nav-top">
          <Link to='/'><img src="/images/logo.png" alt="rainyDays: your emotional piggybank"/></Link>
          <Link to='/newEntry' >Save a Memory</Link>
          {!this.state.logged ?
            <FlatButton label="Login" style={{color: 'white'}} onClick={this.signIn} />
            :
            <FlatButton label="Logout" style={{color: 'white'}} onClick={this.signOut} />
          }
        </div>
      </nav>
    )
  }
}

