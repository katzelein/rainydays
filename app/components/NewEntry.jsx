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


class NewEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: 'public'
    }
    // this.addUserMood = this.addUserMood.bind(this)
    // this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  render() {
    // handleToggle() {
    //   this.setState({status: 'private'})
    // }

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
    return (

      <div>
        <Paper style={style} zDepth={1} >
          <TextField
               hintText="Hint Text"
             /><br />
             <br />
             <TextField
               hintText="The hint text can be as long as you want, it will wrap."
             /><br />
          <DatePicker hintText="Portrait Dialog" container='inline'/>
          <Toggle
            label="public"
            defaultToggled={true}
            style={style.toggle}
          />
        </Paper>
    </div>
    )
  }

  addUserMood(moodInfo){
    fetch(`/api/users/${moodInfo.userName}/${moodInfo.moodName}`, {
      method: "POST",
      headers: {
      "Content-type": "application/json"
      },
      body: JSON.stringify({
        userName: moodInfo.userName,
        moodName: moodInfo.moodName,
        picUrl: moodInfo.picUrl
      })
     })
      .then(()=> store.dispatch(setCurrentUser(moodInfo)))
      .catch(err => console.error(err))

    .then(res => console.log('finished posting'))
  }
}

//   onFormSubmit(e){
//     e.preventDefault();
//     //dispach an action with form info to update the store
//     const moodInfo = {
//       userName: e.target.userName.value,
//       moodName: e.target.moodName.value,
//       picUrl: e.target.picUrl.value
//     }
//     console.log('moodInfo', moodInfo)
//      this.addUserMood(moodInfo)
//   }
// }

const mapState = () => {
  return {}
}

const mapDispatch = (dispach) => {
  return {}
}

export default connect()(NewEntry)

