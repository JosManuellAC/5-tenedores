import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";


import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseApp } from "../utils/firebase";
import Loading from "../../components/Loading";

/*SOPORTE VERSIÓN 9 FIREBASE
useEffect(() => {
    const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, user => {
    console.log(user);
    });
  })*/

export default function Account(){
    const [login, setLogin] = useState(null);

    // useEffect(() => {
    //     const auth = getAuth(firebaseApp);
    //     onAuthStateChanged(auth, user => {
    //         !user ? setLogin(false) : setLogin(true);
    //         console.log(user);
    //     });

    // },[]);

    if(login === null) return <Loading isVisible={true} text="Cargando..." />;
    console.log(login);

    return login ? <UserLogged /> : <UserGuest />;
    
}