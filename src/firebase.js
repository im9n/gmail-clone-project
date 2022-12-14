import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDbZr0W9Fc5Qh_Fbj2UklnFAT8Pl5r2dng",
  authDomain: "clone-852e6.firebaseapp.com",
  projectId: "clone-852e6",
  storageBucket: "clone-852e6.appspot.com",
  messagingSenderId: "399484564607",
  appId: "1:399484564607:web:fd57fc5d7760c3f3af3b4a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { db, auth, provider, timestamp };
