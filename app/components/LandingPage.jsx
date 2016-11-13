import React from 'react'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import SunnyDays from './SunnyDays'
import RainyDays from './RainyDays'

export default class LandingPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      showLeftComponent: false,
      showRightComponent: false,

    }
    this.leftPanelOnClick=this.leftPanelOnClick.bind(this);
    this.rightPanelOnClick=this.rightPanelOnClick.bind(this)
  }

  leftPanelOnClick() {
      this.setState({
        showLeftComponent: true,
        showRightComponent: false})
  }


  rightPanelOnClick() {
      this.setState({
        showLeftComponent: false,
        showRightComponent: true})
    }

  render() {

    return(
    <div>
      <div className='row' >
        <div className='col-lg-5' id='left-panel' onClick={this.leftPanelOnClick}>

          {this.state.showLeftComponent? <SunnyDays/>:null}
        </div>
        <div className='col-lg-5'id='right-panel' onClick={this.rightPanelOnClick}>
          {this.state.showRightComponent? <RainyDays/>:null}
        </div>
      </div>
    </div>
    )
  }
}