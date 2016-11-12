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
