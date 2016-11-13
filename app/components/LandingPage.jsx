import React from 'react'
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import SunnyDays from './SunnyDays'
import RainyDays from './RainyDays'
import Paper from 'material-ui/Paper';

const style = {
  height: 500,
  width: 600,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
}
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
      const leftbunny = document.getElementById('left-bunny')
      leftbunny.style.visibility='hidden'
      const rightbunny = document.getElementById('right-bunny')
      rightbunny.style.visibility='hidden'
      const text = document.getElementById('howyoufeel')
      text.style.visibility='hidden'
      const leftpanel = document.getElementById('left-panel')
      leftpanel.style.width='120%'
      const rightpanel = document.getElementById('right-panel')
      rightpanel.style.width='10%'
  }


  rightPanelOnClick() {
      this.setState({
        showLeftComponent: false,
        showRightComponent: true})
      const rightbunny = document.getElementById('right-bunny')
      rightbunny.style.visibility='hidden'
      const text = document.getElementById('howyoufeel')
      text.style.visibility='hidden'
      const rightpanel = document.getElementById('right-panel')
      rightpanel.style.width='120%'
      const leftpanel = document.getElementById('left-panel')
      leftpanel.style.width='10%'
    }

  render() {

    return(
    <div>

        <div className='row' >
            <div className='col-lg-5' id='left-panel' onClick={this.leftPanelOnClick}>
              {this.state.showLeftComponent? <SunnyDays/>:null}
            </div>
            <img src='/images/happyBunny.png' id='left-bunny'/>

          <div className='col-lg-5'id='right-panel' onClick={this.rightPanelOnClick}>
            {this.state.showRightComponent? <RainyDays/>:null}
          </div>
          <img src='/images/sad_bunny.png' id='right-bunny'/>
        </div>
        <h1 id='howyoufeel'><span>  How are you feeling? </span></h1>
    </div>
    )
  }
}