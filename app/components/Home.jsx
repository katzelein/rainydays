import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import AppBar from './AppBar';

import firebase from 'firebase'
import config from '../../googleAPIconfig.js'

// config and initialize the app in the global scope
var config = {
      apiKey: config.apiKey,
      authDomain: config.authDomain,
      databaseURL: config.databaseURL,
      storageBucket: config.storageBucket,
      messagingSenderId: config.messagingSenderId
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
