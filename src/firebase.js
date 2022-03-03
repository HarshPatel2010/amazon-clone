// import firebase from "./firebase";
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig =  {
//   apiKey: "AIzaSyDE-KLhC_r9oxmf9UfM5zNxEL_Q-Wq2ikI",
//   authDomain: "clone-by-harsh.firebaseapp.com",
//   projectId: "clone-by-harsh",
//   storageBucket: "clone-by-harsh.appspot.com",
//   messagingSenderId: "1064049507171",
//   appId: "1:1064049507171:web:1853c8cc912f0fb21d7156",
//   measurementId: "G-PW7NKZXQLG"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// // export { db, auth };  
// // export default firebase;
// module.exports = auth
// export default firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
export const auth = getAuth(firebaseApp);







