// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOMrkY_z_wII-bv1-EFMVk-5AP6TqVYls",
  authDomain: "notes-stuff.firebaseapp.com",
  projectId: "notes-stuff",
  storageBucket: "notes-stuff.appspot.com",
  messagingSenderId: "1026829113779",
  appId: "1:1026829113779:web:308a6abbfbe793b3aa13c6",
  measurementId: "G-TRPD6GBNXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);