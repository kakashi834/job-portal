import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0ws-nYOBRVeAfUt0GKXP66JR_upnHi88",
  authDomain: "job-portal-31f33.firebaseapp.com",
  projectId: "job-portal-31f33",
  storageBucket: "job-portal-31f33.appspot.com",
  messagingSenderId: "603610641593",
  appId: "1:603610641593:web:d3c0e5ae3ccce049b55768",
  measurementId: "G-M42R5N07B1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const fireDB = getFirestore(app);