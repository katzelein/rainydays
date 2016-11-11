import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import AppBar from './AppBar';


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
