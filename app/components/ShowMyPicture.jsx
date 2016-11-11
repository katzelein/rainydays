import React from 'react'

import Paper from 'material-ui/Paper';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    'position': fixed;
    'top': 50%;
    'left': 50%;
    'margin-top': -50px;
    'margin-left': -100px;
  },
  gridList: {
    width: 600,
    height: 450,
    overflowY: 'auto',
  },
};

const tile =
  {
    img: '/kitten1.jpg',
    title: 'Cute Kitten 1',
    author: 'jill111',
  }

export default class ShowMyPicture extends React.Component {
  render () {
    return (
      <Paper style={{width: 650, padding: 10}}zDepth={4}>
        <div style={styles.root}>
          <GridTile
            key={tile.img}
            title={tile.title} >
            <img src={tile.img} />
          </GridTile>
        </div>
      </Paper>
    )
  }
}
