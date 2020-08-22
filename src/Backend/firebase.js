import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAXvPi4Q-4o7Udrid8he8ma3EZRUnm6jg0",
  authDomain: "twitter-web-clone.firebaseapp.com",
  databaseURL: "https://twitter-web-clone.firebaseio.com",
  projectId: "twitter-web-clone",
  storageBucket: "twitter-web-clone.appspot.com",
  messagingSenderId: "341975728779",
  appId: "1:341975728779:web:4b44bd22e7231fe2faca8e",
  measurementId: "G-2QET4DBB92",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
