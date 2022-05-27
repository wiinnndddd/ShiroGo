// Import the functions you need from the SDKs you need
// import * as firebase from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6ZkXidrpGGetguHr5ZszuZt64tJzOdKY",
  authDomain: "shirogo-2ecd4.firebaseapp.com",
  projectId: "shirogo-2ecd4",
  databaseURL: "https://shirogo-2ecd4-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "shirogo-2ecd4.appspot.com",
  messagingSenderId: "956064572921",
  appId: "1:956064572921:web:203aaa17488572dce74928"
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { auth , db};
