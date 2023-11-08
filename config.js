import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAI5Q2CKnW_lhjg_8mo97YCQaQ4RMwgYu4",
  authDomain: "socialmedia-25076.firebaseapp.com",
  projectId: "socialmedia-25076",
  storageBucket: "socialmedia-25076.appspot.com",
  messagingSenderId: "479669196413",
  appId: "1:479669196413:web:101f17eb78f871638e4314"
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export default firebase;
