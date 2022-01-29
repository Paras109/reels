import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSE1U2F-UBLSMkJERqk8_dPjxFYZ-lAog",
  authDomain: "reels-fb6a5.firebaseapp.com",
  projectId: "reels-fb6a5",
  storageBucket: "reels-fb6a5.appspot.com",
  messagingSenderId: "212384583038",
  appId: "1:212384583038:web:1fd4e895a50a18cc20772f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    posts : firestore.collection('posts'),
    comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebase.storage()