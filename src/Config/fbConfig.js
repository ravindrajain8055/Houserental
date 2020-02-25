import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyCQP4YC5ISbkdXw2K96ZgRMNtUoL0MYKEA",
    authDomain: "house-rental-bba82.firebaseapp.com",
    databaseURL: "https://house-rental-bba82.firebaseio.com",
    projectId: "house-rental-bba82",
    storageBucket: "house-rental-bba82.appspot.com",
    messagingSenderId: "926849114958",
    appId: "1:926849114958:web:6620cb8e357cd9f9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({});
 const storage = firebase.storage();
  export {
    storage, firebase as default
  }
  
