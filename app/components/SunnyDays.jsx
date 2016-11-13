import React from 'react'
import { Link } from 'react-router';

import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';
import ImageSun from 'material-ui/svg-icons/image/wb-sunny';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';

const style = {
  height: 500,
  width: 600,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

export default class SunnyDays extends React.Component {
  render() {
    return(
        <div>
          <Paper style={style} zDepth={5} circle={false} >
          <h4>We're so glad you're feeling sunny today! <br/> Would you like to:</h4>
          <span>Save that sun for a rainy day?</span><br/>
          <a href='/newEntry'>
             <FloatingActionButton>
              <svg
                viewBox="0 0 667 667"
                width="100"
                height="100">
                <image
                  width="667"
                  height="667"
                  xlinkHref="/images/sun.svg"
                  />

              </svg>
              </FloatingActionButton>
          </a>
          <br /><span>or...</span><br />
          <span>Take a look inside your piggybank?</span><br />
          <a href='/showMyPicture'>
            <FloatingActionButton>
              <svg
                viewBox="0 0 667 667"
                width="100"
                height="100" >
                <image
                  width="667"
                  height="667"
                  xlinkHref="/images/piggy-bank-with-dollar-coins.svg"/>
              </svg>
            </FloatingActionButton>
          </a>
        </Paper>
      </div>
    )
  }
}


// We're so glad you're feeling sunny! Would you like to:

// Save that sun for a rainy day?
// See the contents of your piggybank?