// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqUMbuM-hyfCKRfDF7Ij1ZlTH94pO4kNY",
  authDomain: "netflix-1060e.firebaseapp.com",
  projectId: "netflix-1060e",
  storageBucket: "netflix-1060e.appspot.com",
  messagingSenderId: "1083197251186",
  appId: "1:1083197251186:web:d6b298cc4f53110b93aceb",
  measurementId: "G-EF19YJR8RB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();