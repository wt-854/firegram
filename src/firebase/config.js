import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAz33rsgq0GYtjDXMaw5MpN25jMMGvyfIA',
  authDomain: 'wt854-firegram.firebaseapp.com',
  databaseURL: 'https://wt854-firegram.firebaseio.com',
  projectId: 'wt854-firegram',
  storageBucket: 'wt854-firegram.appspot.com',
  messagingSenderId: '24345504044',
  appId: '1:24345504044:web:6c057c801c74283465a489',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
