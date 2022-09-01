
import {getFirestore} from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALlITC1rR7AVPcJIVIYDL0-U5kLdMoNTo",
  authDomain: "react-tienda-e4ef8.firebaseapp.com",
  projectId: "react-tienda-e4ef8",
  storageBucket: "react-tienda-e4ef8.appspot.com",
  messagingSenderId: "104787891628",
  appId: "1:104787891628:web:c4e605612c4c0e40a79609"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 //selecionar la bd de firestore con getFireStore
 const DB = getFirestore(app);
   
 export default DB;