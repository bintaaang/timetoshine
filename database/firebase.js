//database 
//import * as firebase from 'firebase';
// v9 compat packages are API compatible with v8 code

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDuQBcRwiMRjmfSS1Z8iTmJDOV9wK3_uBw",
  authDomain: "tandatanya-73a9d.firebaseapp.com",
  projectId: "tandatanya-73a9d",
  storageBucket: "tandatanya-73a9d.appspot.com",
  messagingSenderId: "439812129547",
  appId: "1:439812129547:web:047f5c6a97bc49c069580e"
};

// Initialize Firebase
const app =  firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export { auth };
export default firebase;
  