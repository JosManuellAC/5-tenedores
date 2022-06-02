import React, { useEffect } from "react";
import Navigation from "./app/screens/navigations/Navigation";
import { firebaseApp } from "./app/screens/utils/firebase";
import firebase from "firebase/compat/app";
//import { getAuth, onAuthStateChanged } from "firebase/auth";

/*SOPORTE VERSIÓN 9 FIREBASE
useEffect(() => {
    const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, user => {
    console.log(user);
    });
  })*/


export default function App() {

  

  return <Navigation />;
}

