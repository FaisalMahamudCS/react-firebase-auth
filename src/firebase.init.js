// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8swrjIHCjhrRG8vfhxc8WmBOnNbT0eVY",
  authDomain: "router-firebase-authenti-7e5fa.firebaseapp.com",
  projectId: "router-firebase-authenti-7e5fa",
  storageBucket: "router-firebase-authenti-7e5fa.appspot.com",
  messagingSenderId: "605643574272",
  appId: "1:605643574272:web:f8f9f80f846baffe8f1ce5",
  measurementId: "G-XDS660N5LH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;