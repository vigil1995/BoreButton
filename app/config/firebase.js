import React from 'react';
import * as firebase from 'firebase';

//initialize firebase
const firebaseconfig = {
    apiKey: "AIzaSyANr5d1ywhx6QIJc8o7rucLmeDiShPRIYc",
      authDomain: "borebutton.firebaseapp.com",
      databaseURL: "https://borebutton.firebaseio.com",
      projectId: "borebutton",
      storageBucket: "borebutton.appspot.com",
  
  }
  firebase.initializeApp(firebaseconfig);
  var db = firebase.firestore();


  export default {
      db:db
  }


  ////