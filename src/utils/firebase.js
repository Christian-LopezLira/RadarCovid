import firebase from 'firebase/app';
import 'firebase/auth';

// Initialize Firebase
//Pega aquí tu Firebase Config


const firebaseConfig = {
    apiKey: "AIzaSyDsaPxBHQ_BwRNg-1hSyqQ7Ln341PVpGv0",
    authDomain: "radar-covid-a58ed.firebaseapp.com",
    projectId: "radar-covid-a58ed",
    storageBucket: "radar-covid-a58ed.appspot.com",
    messagingSenderId: "264883098746",
    appId: "1:264883098746:web:0b30c385fc28323bb0d7c3",
    measurementId: "G-FB0923L0VK"
  };

  

  
let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;