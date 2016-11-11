import React from 'react'
import { Link } from 'react-router'
// export const Login = ({ login }) => (
//   <form onSubmit={evt => {
//     evt.preventDefault()
//     login(evt.target.username.value, evt.target.password.value)
//   } }>
//     <input name="username" />
//     <input name="password" type="password" />
//     <input type="submit" value="Login" />
//   </form>
// )

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'
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

export default class Login extends React.Component {
  // create firebase auth
  auth = firebase.auth()
  database = firebase.database()
  storage = firebase.storage()
  // signIn using google as the provider
  signIn = () => this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider)

  signOut = () => {
    this.auth.signOut()
    console.log('you have successfully sign out')
  }
  render() {

    return(
      <div>
        <button onClick={this.signIn}>Login</button>
        <button onClick={this.signOut}>Sign Out</button>
      </div>)
  }
}

// export default connect (
//   state => ({}),
//   {login},
// ) (Login)
