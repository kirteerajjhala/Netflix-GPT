// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS9nVyLT14EpbVIye5HBlDnnCovbLoFvA",
  authDomain: "netflixgpt-9b9c2.firebaseapp.com",
  projectId: "netflixgpt-9b9c2",
  storageBucket: "netflixgpt-9b9c2.firebasestorage.app",
  messagingSenderId: "845821258683",
  appId: "1:845821258683:web:d4fe26c32c7bbac682f29e",
  measurementId: "G-1PR477ET5G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()

