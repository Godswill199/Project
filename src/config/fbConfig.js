import firebase from "firebase/app"
import  'firebase/firestore'
import   "firebase/auth"



var firebaseConfig = {
  apiKey: "AIzaSyCAXAi2Zgk8VTO4w-Q3q9lrJGvFBdmm-fk",
  authDomain: "brand-ambassador-699be.firebaseapp.com",
  databaseURL: "https://brand-ambassador-699be.firebaseio.com",
  projectId: "brand-ambassador-699be",
  storageBucket: "brand-ambassador-699be.appspot.com",
  messagingSenderId: "495224173820",
  appId: "1:495224173820:web:01cf424422e3fe2e1c5379",
  measurementId: "G-4YLX5R8RCB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebase;