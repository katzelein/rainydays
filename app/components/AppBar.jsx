import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
// import Login from './Login';

import Popover from 'material-ui/Popover';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import FlatButton from 'material-ui/FlatButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';

import firebase from 'firebase'


const style = {margin: 5, color: 'white'};

export default class AppBar extends React.Component {

  auth = firebase.auth();

  constructor () {
    super()
    this.state = {
      mood: '',
      logged: false,
      open: false,
      displayName: null,
      email: null,
      userPhoto: null,
      uid: null,
      providerData: null,
    }
    this.signIn.bind(this)
    this.signOut.bind(this)
  }

  signIn = () => {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider)
    this.setState({
      logged: true, 
    })

    let user = firebase.auth().currentUser.providerData[0]

    let displayName = user.displayName;
    let email = user.email;
    let emailVerified = user.emailVerified;
    let photoURL = user.photoURL;
    let isAnonymous = user.isAnonymous;
    let uid = user.uid;
    let providerData = user.providerData;

    this.setState({
      displayName: displayName,
      email: email,
      userPhoto: photoURL,
      uid: uid,
      providerData: providerData,
      logged: true
    })
    console.log("User has logged in")
  }

  signOut = () => {
    firebase.auth().signOut()
    this.setState({
      logged: false,
      displayName: null,
      email: null,
      userPhoto: null,
      uid: null,
      providerData: null,
    })
    console.log('User is now logged out')
  }

  componentDidMount () {
    if (firebase.auth().currentUser) {
      this.setState({
        displayName: displayName,
        email: email,
        userPhoto: photoURL,
        uid: uid,
        providerData: providerData,
        logged: true
      })
    }
  }


  render() {
    console.log(firebase.auth().currentUser)

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
                <li><a href="/showMyPictures">Show All My Pictures</a></li>
                <li><a href="/showMyPicture">Show a Random Picture</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  { 

                    this.state.logged ? 
                      <div>
                        <Avatar
                          src={this.state.userPhoto}
                          size={30}
                          style={style}
                          />
                        <span style={{color: 'white'}}>Hi, {this.state.displayName}</span>
                        <FlatButton label="Logout" style={style} onClick={this.signOut} />
                      </div>
                    : 
                      <FlatButton label="Login" style={style} onClick={this.signIn} />
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

