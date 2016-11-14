import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import firebase from 'firebase'

import Popover from 'material-ui/Popover';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import Avatar from 'material-ui/Avatar';



export default class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      userPhoto: '',
      uid: '',
      providerData: null,
      logged: false
    }
    this.onSignIn.bind(this)
    this.isUserEqual.bind(this)
    this.handleSignOut.bind(this)
    this.initApp.bind(this)
    this.signIn.bind(this)
    this.signOut.bind(this)
  }


  componentWillMount() {
    this.initApp(); 
  }

  render () {
    return (
      <div>
        { 
          this.state.logged ? 
            <div>
              <Avatar
                src={this.state.userPhoto}
                size={30}
                />
              <span>Hi, {this.state.displayName}</span>
              <FlatButton label="Logout" style={{color: 'white'}} onClick={this.handleSignOut} />
            </div>
          : 
            <FlatButton label="Login" style={{color: 'white'}} onClick={this.onSignIn} />
        }
      </div>
    )
  }

  signIn () {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider)
    this.setState({
      logged: true
    })
  }

  signOut () {
    firebase.auth().signOut()
    this.setState({
      logged: false
    })
    console.log('You\'re now logged out')
  }

  onSignIn(googleUser) {
    console.log('Google Auth Response', googleUser);

    var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
      unsubscribe();

      if (!this.isUserEqual(googleUser, firebaseUser)) {
        var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.getAuthResponse().id_token);
        firebase.auth().signInWithCredential(credential).catch(function(error) {

          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;

          var credential = error.credential;
          if (errorCode === 'auth/account-exists-with-different-credential') {
            alert('You have already signed up with a different auth provider for that email.');
          } else {
            console.error(error);
          }
        });
      } 
      else {
        console.log('User already signed-in to Firebase.');
      }
    });
  }

  isUserEqual(googleUser, firebaseUser) {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
            providerData[i].uid === googleUser.getBasicProfile().getId()) {
          return true;
        }
      }
    }
    return false;
  }

  handleSignOut() {
    var googleAuth = gapi.auth2.getAuthInstance();
    googleAuth.signOut().then(function() {
      firebase.auth().signOut();
    });
  }

  initApp() {
    // Auth state changes.
    firebase.auth().onAuthStateChanged(function(user){
      if (user) {

        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;

        this.setState({
          displayName: displayName,
          email: email,
          userPhoto: photoURL,
          uid: uid,
          providerData: providerData,
          logged: true
        })
        console.log("User is already logged in")
      }
      else {
        this.setState({
          logged: false
        })
        console.log("User is not logged in")
      }
    }) 
  }
}