// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA71pFHM5sSiJn3UMGQOQELngo8rRb7xes",
  authDomain: "netflix-clone-aa56c.firebaseapp.com",
  projectId: "netflix-clone-aa56c",
  storageBucket: "netflix-clone-aa56c.appspot.com",
  messagingSenderId: "349421834272",
  appId: "1:349421834272:web:ee26e7f5f7dd0b8d17ec45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();