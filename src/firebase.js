import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDyVJ_JmdcmQEQIA2We9gTFhdd4kY3W_E0",
  authDomain: "clone-28204.firebaseapp.com",
  databaseURL: "https://clone-28204.firebaseio.com",
  projectId: "clone-28204",
  storageBucket: "clone-28204.appspot.com",
  messagingSenderId: "154479246212",
  appId: "1:154479246212:web:0cfb795d1d264455c6bbd1",
  measurementId: "G-7RDCZR5X8W",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
