import React from 'react'
import { Link } from 'react-router';

import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';
import Paper from 'material-ui/Paper';

const style = {
  height: 500,
  width: 600,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

export default class ShowMemory extends React.Component {
  render() {
    return(
        <div>
          <Paper style={style} zDepth={5} circle={false} >
          <h4>What kind of memory would you like to see?</h4>
          <span>A picture</span><br/>
          <svg 
            viewBox="0 0 667 667"
            width="100"
            height="100">
            <image 
              width="667" 
              height="667"
              xlinkHref="/images/image-gallery.svg"
              />
          </svg>
          <br /><span>or...</span><br />
          <span>A thought</span><br />
          <svg 
            viewBox="0 0 667 667"
            width="100"
            height="100" >
            <image 
              width="667" 
              height="667"
              xlinkHref="/images/pencil-with-stripes.svg"/>
          </svg>
        </Paper>
      </div>
    )
  }
}