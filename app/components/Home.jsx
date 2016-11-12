import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import AppBar from './AppBar';

import firebase from 'firebase'

// config and initialize the app in the global scope
var config = {
      apiKey: "AIzaSyDG_-h-hfHUfl2ZDweQeBczeohVe7CD58o",
      authDomain: "rainydays-b83c4.firebaseapp.com",
      databaseURL: "https://rainydays-b83c4.firebaseio.com",
      storageBucket: "rainydays-b83c4.appspot.com",
      messagingSenderId: "820568609336"
};
firebase.initializeApp(config);


export class Home extends Component {

  constructor () {
    super()
    this.state = {
      mood: ''
    }
  }

  render() {

    return (
      <div>
        <AppBar />
        {this.props.children}
      </div>
    )
  }
}

// const mapStateToProps = ({auth}) => ({
//   auth
// })

export default connect (
  null,
  null
) (Home)
