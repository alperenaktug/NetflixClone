// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHqqJY-VkMQd9OQmusEiDPnA3TCW37xlo",
  authDomain: "netflixclone-1c92e.firebaseapp.com",
  projectId: "netflixclone-1c92e",
  storageBucket: "netflixclone-1c92e.appspot.com",
  messagingSenderId: "731195370055",
  appId: "1:731195370055:web:db1da692d217da5bc55f62",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
