// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const apiKey= import.meta.env.VITE_FIREBASE_API_KEY
console.log({apiKey})
const firebaseConfig = {
  apiKey ,
  authDomain: "mern-estate-6d0a4.firebaseapp.com",
  projectId: "mern-estate-6d0a4",
  storageBucket: "mern-estate-6d0a4.appspot.com",
  messagingSenderId: "177174174944",
  appId: "1:177174174944:web:c784cccb4cd64acaa04485"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);