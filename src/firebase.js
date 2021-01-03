import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDmMypmkggp4FWsSedleQ0xWvYUyZKEgdg",
  authDomain: "clone-7b1d8.firebaseapp.com",
  projectId: "clone-7b1d8",
  storageBucket: "clone-7b1d8.appspot.com",
  messagingSenderId: "462482499038",
  appId: "1:462482499038:web:a1b5d8b2e8b4011e35694f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
