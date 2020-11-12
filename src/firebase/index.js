
import firebase from 'firebase/app';
import 'firebase/analytics';

const config = {
    apiKey: "AIzaSyBle6swyZVZs8EGq4MaWkYxNHRGnEMFat0",
    authDomain: "portfolio-4d1f8.firebaseapp.com",
    databaseURL: "https://portfolio-4d1f8.firebaseio.com",
    projectId: "portfolio-4d1f8",
    storageBucket: "portfolio-4d1f8.appspot.com",
    messagingSenderId: "248381898571",
    appId: "1:248381898571:web:a245257ea5b3fa05ee32ce",
    measurementId: "G-WF3JW9QZ1H"
};

firebase.initializeApp(config);
const analytics = firebase.analytics()

export { firebase, analytics }