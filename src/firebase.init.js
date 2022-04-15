// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkLgOS4LcIp4qgpuluvWsHmQUjFM3yzK0",
  authDomain: "hotchef-d49ec.firebaseapp.com",
  projectId: "hotchef-d49ec",
  storageBucket: "hotchef-d49ec.appspot.com",
  messagingSenderId: "34438611598",
  appId: "1:34438611598:web:4b71126da9a44b8144bfdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);