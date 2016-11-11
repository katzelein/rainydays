import React from 'react'

import Paper from 'material-ui/Paper';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 600,
    height: 450,
    overflowY: 'auto',
  },
};

const dummyData = [
  {
    img: '/kitten1.jpg',
    title: 'Cute Kitten 1',
    author: 'jill111',
  },
  {
    img: '/kitten2.jpg',
    title: 'Cute Kitten 2',
    author: 'pashminu',
  },
  {
    img: '/kitten3.jpg',
    title: 'Cute Kitten 3',
    author: 'Danson67',
  },
  {
    img: '/kitten4.jpg',
    title: 'Cute Kitten 4',
    author: 'fancycrave1',
  },
  {
    img: '/kitten5.jpg',
    title: 'Cute Kitten 5',
    author: 'Hans',
  },
  {
    img: '/kitten6.jpg',
    title: 'Cute Kitten 6',
    author: 'fancycravel',
  },
  {
    img: '/kitten7.jpg',
    title: 'Cute Kitten 7',
    author: 'jill111',
  },
  {
    img: '/kitten8.jpg',
    title: 'Cute Kitten 8',
    author: 'BkrmadtyaKarki',
  },
];

export default class ShowMyPictures extends React.Component {
  render () {
    return (
      <Paper style={{width: 650, padding: 10}}zDepth={4}>
        <div style={styles.root}>
          <GridList
            cellHeight={180}
            style={styles.gridList} >
            <Subheader style={{textAlign: 'center'}}>All My Rainy Day Pictures</Subheader>
            {dummyData.map((tile) => (
              <GridTile
                key={tile.img}
                title={tile.title} >
                <img src={tile.img} />
              </GridTile>
            ))}
          </GridList>
        </div>
      </Paper>
    )
  }
}
