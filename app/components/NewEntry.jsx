import React from 'react';
import { connect } from 'react-redux'
//import { setCurrentUser } from '../reducers/user-reducer'
import { Link } from 'react-router'
import axios from 'axios'
import store from '../store'
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

// comment this out or delete it once component is connected to rest of site
var config = {
      apiKey: "AIzaSyDG_-h-hfHUfl2ZDweQeBczeohVe7CD58o",
      authDomain: "rainydays-b83c4.firebaseapp.com",
      databaseURL: "https://rainydays-b83c4.firebaseio.com",
      storageBucket: "rainydays-b83c4.appspot.com",
      messagingSenderId: "820568609336"
};
firebase.initializeApp(config);

class NewEntry extends React.Component {

  constructor(props) {

    super(props)
    this.state = {
      subject: '',
      content: '',
      date: '',
      status: 'private',
      open: false
    }

    this.onFormSubmit.bind(this)
    this.handleSubjectChange.bind(this)
    this.handleContentChange.bind(this)
    this.handleDateChange.bind(this)
    this.handleStatusChange.bind(this)
    this.handleOpen.bind(this)
    this.handleClose.bind(this)
  }

  handleSubjectChange = (e) =>
    this.setState({
      subject: e.target.value
    })

  handleContentChange = (e) =>
    this.setState({
      content: e.target.value
    })

  handleDateChange = (e, date) => {
    const newDate = date.toString();
    this.setState({
      date: newDate
    })
    // for some reason this doesn't save to the state, 
    // but I don't think it's especially important 
    // that it does. Use JSON.stringify otherwise
  }

  handleStatusChange = (e) =>
    this.setState({
      status: e.target.value
    })

  onFormSubmit = (e) => {
    // e.preventDefault();

    const userEmail = firebase.auth().currentUser.providerData[0].email

    var memory = firebase.database().ref('memories/');

    memory.push({
      username: userEmail,
      subject: this.state.subject,
      content: this.state.content,
      date: this.state.date,
      status: this.state.status
    })
  }

  handleClose = () => {
    this.setState({open: false});
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  render() {

    const style = {
      height: 500,
      width: 500,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
      block: {
         maxWidth: 250,
       },
       toggle: {
         marginBottom: 16,
       },
       thumbOff: {
         backgroundColor: '#ffcccc',
       },
       trackOff: {
         backgroundColor: '#ff9d9d',
       },
       thumbSwitched: {
         backgroundColor: 'red',
       },
       trackSwitched: {
         backgroundColor: '#ff9d9d',
       },
       labelStyle: {
         color: 'red',
       },
    };

    const actions = [
      <RaisedButton 
        label="OK"
        primary={true}
        onClick={this.handleClose} />
    ];

    return (

      <div>
        <Paper style={style} zDepth={1} >
          <form onSubmit={this.onFormSubmit}>
            <TextField 
              hintText="What was your thought about?" 
              name="subject"
              onChange={this.handleSubjectChange} />
            <br />
            <br />
            <TextField
              hintText="What about this memory makes you happy?"
              name="content"
              onChange={this.handleContentChange} />
            <br />
            <DatePicker 
              hintText="What was the date this happened" 
              container='inline' 
              name="date" 
              onChange={this.handleDateChange} />
            <Toggle
              label="private"
              defaultToggled={true}
              style={style.toggle}
              name="status"
              onChange={this.handleStatusChange} />
            <RaisedButton label="Save My Memory" onClick={this.handleOpen} primary={true} />
            <Dialog
              title="Save My Memory"
              open={this.state.open} 
              actions={actions} >
              Thanks for saving your memory for a rainy day.
            </Dialog>
          </form>
        </Paper>
      </div>
    )
  }
}

const mapState = () => {
  return {}
}

const mapDispatch = (dispatch) => {
  return {}
}

export default connect()(NewEntry)

