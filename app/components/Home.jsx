import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';


export class Home extends Component {

  render() {

    return (
      <div>
        <AppBar>
          <Link to='/'><img src="/logo.png" alt="rainyDays: your emotional piggybank"/></Link>
        </AppBar>
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
