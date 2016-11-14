import React from 'react'

import Paper from 'material-ui/Paper';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

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

const tile =
  {
    img: 'images/kitten1.jpg',
    title: 'Cute Kitten 1',
    author: 'kathrynguthrie@gmail.com',
  }

export default class ShowMyPicture extends React.Component {

  render () {

    return (
      <Paper style={{width: 650, padding: 10}} zDepth={4} id='single'>
        <Card>
          <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />} >
            <img src={tile.img} style={{width: 350, padding: 10}}/>
          </CardMedia>
          <CardTitle title={tile.title} subtitle="Card subtitle" />
          <CardActions>
            <FlatButton label="See More Pictures" primary={true} />
            <FlatButton label="See My Memories" primary={true}/>
          </CardActions>
          <CardText expandable={true}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
        </Card>
      </Paper>
    )
  }
}