import firebase from 'firebase';

const config = {
  apiKey: 'your_api_key',
  authDomain: 'your_db_name.firebaseio.com',
  databaseURL: 'https://your_db_name.firebaseio.com/'
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;