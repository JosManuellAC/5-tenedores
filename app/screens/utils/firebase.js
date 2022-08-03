import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDN3ZR1GhKgd6Co2qMuH0oMSJ_bFjMrpU8",
    authDomain: "tenedores12-7d912.firebaseapp.com",
    projectId: "tenedores12-7d912",
    storageBucket: "tenedores12-7d912.appspot.com",
    messagingSenderId: "571723546111",
    appId: "1:571723546111:web:90ed78d63d330595337bca"
  };
  
  // Initialize Firebase
 // const app = initializeApp(firebaseConfig);
 //versión 9.0
 //export const firebaseApp = initializeApp(firebaseConfig);

 export const firebaseApp = firebase.initializeApp(firebaseConfig);