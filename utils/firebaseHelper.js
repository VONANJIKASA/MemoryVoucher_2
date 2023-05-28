// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

export const getFirebaseApp = () => {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBRFKu93hoMCogvP0lAibJ2qd6E9ntME7s",
    authDomain: "memoryvoucher-1288b.firebaseapp.com",
    projectId: "memoryvoucher-1288b",
    storageBucket: "memoryvoucher-1288b.appspot.com",
    messagingSenderId: "810255684964",
    appId: "1:810255684964:web:4f7e8d576b04d40c175671",
    measurementId: "G-7HKF29SJD7",
  };

  // Initialize Firebase
  return initializeApp(firebaseConfig);
};
