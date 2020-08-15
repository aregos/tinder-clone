import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBCpTI8hd3ycBgt8WqnkdfAeupuk7O-FTo",
    authDomain: "tinder-clone-6fa2e.firebaseapp.com",
    databaseURL: "https://tinder-clone-6fa2e.firebaseio.com",
    projectId: "tinder-clone-6fa2e",
    storageBucket: "tinder-clone-6fa2e.appspot.com",
    messagingSenderId: "1052737025780",
    appId: "1:1052737025780:web:8cc1536a8c0d7d1a9e50a1",
    measurementId: "G-S694PR4TCG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const database = firebaseApp.firestore()

export default database