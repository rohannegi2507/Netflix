// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import { Auth, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSQI03k_JRRhUY08lI7QWm4Koqk_NKPG4",
  authDomain: "netflixgpt-6d7ab.firebaseapp.com",
  projectId: "netflixgpt-6d7ab",
  storageBucket: "netflixgpt-6d7ab.appspot.com",
  messagingSenderId: "155243496199",
  appId: "1:155243496199:web:8bb8ec2cd88e23c5ae7ba2",
  measurementId: "G-7R8G0CDEKZ"
};

// Initialize Firebase
 const app: FirebaseApp = initializeApp(firebaseConfig);
 const analytics: Analytics = getAnalytics(app);
 const auth: Auth = getAuth(app);

 export {auth}
