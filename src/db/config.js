import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAcaYS27fpWbGoBo5Z9FV2jL7szzn98eig",
  authDomain: "rougroup.firebaseapp.com",
  databaseURL: "https://rougroup.firebaseio.com",
  projectId: "rougroup",
  storageBucket: "rougroup.appspot.com",
  messagingSenderId: "122334513452",
  appId: "1:122334513452:web:b90d4ecd991e891c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export default firestore;
