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

  auth = firebase.auth();

  constructor () {
    super()
    this.state = {
      mood: '',
      logged: false,
      open: false,
    }
  }

  render() {

    return (
      <nav>
        <div id="nav-top">
          <Link to='/'><img src="/images/logo.png" alt="rainyDays: your emotional piggybank"/></Link>
          <Link to='/newEntry' >Save a Memory</Link>
          <Link to='/newPicture' >Save a Picture</Link>
          <Link to='/showMyPictures' >Show My Pictures</Link>
          <Link to='/showMyPicture' >Show My Picture</Link>
          <Link to='/choose' >Choose a mood</Link>
          <Login /> 
        </div>
      </nav>
    )
  }
}


