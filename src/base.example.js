import firebase from 'firebase/app'
import database from 'firebase/database'
import Rebase from 're-base'
// Initialize Firebase
const config = {
    apiKey: "YOUR API KEY",
    authDomain: "YOURDOMAIN.firebaseapp.com",
    databaseURL: "YOUR URL",
    projectId: "YOUR ID",
    storageBucket: "YOUR STORAGE",
    messagingSenderId: "NUMBERRRRRR"
  };
  const app = firebase.initializeApp(config);
  const db  = database(app)


export default  Rebase.createClass(db)