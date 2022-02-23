// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyBIYSV3m11PwvfVQF5pvJjPtFSHD0MbUJo",
  authDomain: "newproject-cf88d.firebaseapp.com",
  projectId: "newproject-cf88d",
  storageBucket: "newproject-cf88d.appspot.com",
  messagingSenderId: "690700471400",
  appId: "1:690700471400:web:45133194edca354dacbfdd",
  measurementId: "G-QP9PW42Z3X"
};

const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);