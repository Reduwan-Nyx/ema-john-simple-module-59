// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1wer6Js6O7CICG-7bIjkBfoW2bO5g0sA",
  authDomain: "ema-john-simple-38383.firebaseapp.com",
  projectId: "ema-john-simple-38383",
  storageBucket: "ema-john-simple-38383.appspot.com",
  messagingSenderId: "243988181942",
  appId: "1:243988181942:web:db45ddbe3fc1ece7a88717"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;