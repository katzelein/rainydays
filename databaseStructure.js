// 'users': {
//   'katzelein': {
//     'name': 'Kat Guthrie',
//     'email': 'kathrynguthrie@gmail.com',
//     'photoURL': 'www.google.com'
//   },
//   'laylawu': {
//     'name': 'Layla Wu',
//     'email': 'hiro0404@gmail.com',
//     'photoURL': 'www.facebook.com'
//   }
// }

'memories': {
  'katzelein': {
    'subject': 'I love my mom',
    'content': 'She is hilarious',
    'date': '11-07-2016',
    'status': 'private'
  }
  'laylawu': {
    'subject': 'My dog is the best',
    'content': 'He has the most awesome nose',
    'date': '11-08-2016',
    'status': 'public'
  }
}

// Firebase.auth

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  uid = user.uid; 