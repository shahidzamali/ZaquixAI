
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyB_bH4NMHM1Tsfvwq3mQFP2F0nOFSUcLiI",
  authDomain: "zaquixai.firebaseapp.com",
  projectId: "zaquixai",
  storageBucket: "zaquixai.appspot.com",
  messagingSenderId: "851749881151",
  appId: "1:851749881151:web:b0e60ce6df49055aad3f8a",
  measurementId: "G-7G2ZY1TBGY"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}