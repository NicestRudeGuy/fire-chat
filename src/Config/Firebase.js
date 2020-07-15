import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyDB-Kk5625CaD8DWV6T-98_nB27Vpob3lw",
    authDomain: "fire-chat-007.firebaseapp.com",
    databaseURL: "https://fire-chat-007.firebaseio.com",
    projectId: "fire-chat-007",
    storageBucket: "fire-chat-007.appspot.com",
    messagingSenderId: "959704079670",
    appId: "1:959704079670:web:368ac63de9b5bcc5c2a797",
    measurementId: "G-VY6D25N7JN"


});

const db = firebaseApp.firestore();

export default db;