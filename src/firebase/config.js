import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu9qrtJdwS1MnJQaVUsyBr4zis7iwXfcI",
  authDomain: "olx-clone-b3437.firebaseapp.com",
  projectId: "olx-clone-b3437",
  storageBucket: "olx-clone-b3437.appspot.com",
  messagingSenderId: "320217628463",
  appId: "1:320217628463:web:31401fd7b27c19641cabda",
  measurementId: "G-SDVQK9K4ML"
};

export default firebase.initializeApp(firebaseConfig)