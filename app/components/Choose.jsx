import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import Paper from 'material-ui/Paper';

export class Choose extends Component {

  constructor () {
    super()
    this.state = {
      mood: ''
    }
  }

  render() {

    return (
      <div>
        <Paper style={style} zDepth={1} >
          <h1>IS ANYONE OUT THERE</h1>
        </Paper>
      </div>
    )
  }
}

// <Link to='/sunnyDays'> Are you feeling sunny?</Link>
// <Link to='/rainyDays'> Or are you feeling rainy?</Link>