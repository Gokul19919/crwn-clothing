import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDkbf68XGb4jtfY2iiQsnq_kmzd7L2zy3A",
    authDomain: "crown-db-35010.firebaseapp.com",
    projectId: "crown-db-35010",
    storageBucket: "crown-db-35010.appspot.com",
    messagingSenderId: "154593578069",
    appId: "1:154593578069:web:2a94e1778190b4bfda58dc",
    measurementId: "G-5B2S6QJ0H8"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider =  new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;