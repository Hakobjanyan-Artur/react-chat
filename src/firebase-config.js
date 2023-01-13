// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWvtwzZp-qJlRZ_CztqP0pWI-IY7VbWxg",
  authDomain: "chatapp-db974.firebaseapp.com",
  projectId: "chatapp-db974",
  storageBucket: "chatapp-db974.appspot.com",
  messagingSenderId: "932121448018",
  appId: "1:932121448018:web:8926e397dca2847c2dd98b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const provider = new GoogleAuthProvider()

export const db = getFirestore(app)