import React from 'react'
import { Link } from 'react-router';

import Paper from 'material-ui/Paper';

import firebase from 'firebase'


export default class ShowMyThoughts extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      memories: []
    }
  }

  componentDidMount () {

    // retrieves memories by logged in user from the database
    
    const userEmail = firebase.auth().currentUser ? firebase.auth().currentUser.providerData[0].email : alert('Please log in to use this function')
    const memories = [];

    let ref = firebase.database().ref("memories")

    ref.orderByChild('username').equalTo(userEmail).on("child_added", function(snapshot) {
      memories.push(snapshot.val()) 
    });
    this.setState({
      memories: memories
    })

    // LAYLA: whenever you decide to build out this
    // component, know that you can do whatever you 
    // need to do with the data stored in 
    // this.state.memories; it's an array of all the 
    // memories saved to the database for the logged in user
  }

  render() {
    return(
      <div>
        <Paper style={{width: 650, padding: 10}} zDepth={4} >
          {
            this.state.memories.map(memory => (
              <h4>{memory.subject}</h4>
              ))
          }
        </Paper>
      </div>
    )
  }
}