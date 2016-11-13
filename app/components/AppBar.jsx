import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import Login from './Login';

import Popover from 'material-ui/Popover';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import FlatButton from 'material-ui/FlatButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
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
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Rainy Day</a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li className="active"><a href="/choose">Home</a></li>
                <li><a href="/newEntry">Add A Memory</a></li>
                <li><a href="/showMyPicture">Show My Memory</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><span className="glyphicon glyphicon-log-in"></span>

                    {!this.state.logged ?
                      <FlatButton label="Login" style={{color: 'red'}} onClick={this.signIn} />
                            :
                    <FlatButton label="Logout" style={{color: 'red'}} onClick={this.signOut} />
                    }
                </li>
              </ul>
            </div>
          </div>
        </nav>


      </div>
    )
  }
}

