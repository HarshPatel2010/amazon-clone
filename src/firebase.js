

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth} from "firebase/auth";
import { getFirestore } from 'firebase/firestore'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE-KLhC_r9oxmf9UfM5zNxEL_Q-Wq2ikI",
  authDomain: "clone-by-harsh.firebaseapp.com",
  projectId: "clone-by-harsh",
  storageBucket: "clone-by-harsh.appspot.com",
  messagingSenderId: "1064049507171",
  appId: "1:1064049507171:web:1853c8cc912f0fb21d7156",
  measurementId: "G-PW7NKZXQLG"
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
// export const db  = getStorage(firebaseApp);
export const db  = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);







