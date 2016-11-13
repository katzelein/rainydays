import React from 'react'

import Paper from 'material-ui/Paper';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import {Link} from 'react-router'

var config = {
      apiKey: "AIzaSyDG_-h-hfHUfl2ZDweQeBczeohVe7CD58o",
      authDomain: "rainydays-b83c4.firebaseapp.com",
      databaseURL: "https://rainydays-b83c4.firebaseio.com",
      storageBucket: "rainydays-b83c4.appspot.com",
      messagingSenderId: "820568609336"
};
firebase.initializeApp(config);

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
    id: 1,
    img: '/kitten1.jpg',
    title: 'Cute Kitten 1',
    author: 'jill111',
  },
  {
    id: 2,
    img: '/kitten2.jpg',
    title: 'Cute Kitten 2',
    author: 'pashminu',
  },
  {
    id: 3,
    img: '/kitten3.jpg',
    title: 'Cute Kitten 3',
    author: 'Danson67',
  },
  {
    id: 4,
    img: '/kitten4.jpg',
    title: 'Cute Kitten 4',
    author: 'fancycrave1',
  },
  {
    id: 5,
    img: '/kitten5.jpg',
    title: 'Cute Kitten 5',
    author: 'Hans',
  },
  {
    id: 6,
    img: '/kitten6.jpg',
    title: 'Cute Kitten 6',
    author: 'fancycravel',
  },
  {
    id: 7,
    img: '/kitten7.jpg',
    title: 'Cute Kitten 7',
    author: 'jill111',
  },
  {
    id: 8,
    img: '/kitten8.jpg',
    title: 'Cute Kitten 8',
    author: 'BkrmadtyaKarki',
  },
];

export default class ShowMyPictures extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      pictures: []
    }
  }


  componentWillMount () {

    // retrieves pictures by logged in user from the database
    
    const userEmail = firebase.auth().currentUser ? firebase.auth().currentUser.providerData[0].email : alert('Please log in to use that feature')
    const pictures = [];


    let ref = firebase.database().ref("pictures")

    ref.orderByChild('username').equalTo(userEmail).on("child_added", function(snapshot) {
      pictures.push(snapshot.val()) 
      console.log(snapshot.val())
    });
    this.setState({
      pictures: pictures
    })
  }

  render () {
    console.log(this.props)
    return (
      <Paper style={{width: 650, padding: 10}}zDepth={4}>
        <div style={styles.root}>
          <GridList
            cellHeight={180}
            style={styles.gridList}>
            <Subheader style={{textAlign: 'center'}}>All My Rainy Day Pictures</Subheader>
              {
                this.state.pictures && this.state.pictures.map((picture) => (
                  <GridTile
                    key={picture.id}
                    title={picture.title} >
                    <img src={picture.img} />
                    <Link to={`/pictures/${picture.id}`} picture={picture}/>
                  </GridTile>
              ))}
          </GridList>
        </div>
      </Paper>
    )
  }
}
