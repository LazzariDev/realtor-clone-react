// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFqa3WpA63IEimJSwC-CApEfyszdA69aE",
  authDomain: "realtor-clone-react-49f87.firebaseapp.com",
  projectId: "realtor-clone-react-49f87",
  storageBucket: "realtor-clone-react-49f87.appspot.com",
  messagingSenderId: "471749971316",
  appId: "1:471749971316:web:ad6b87cd6429bf59113021"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();