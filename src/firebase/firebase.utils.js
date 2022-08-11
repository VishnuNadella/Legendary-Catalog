import firebase from "firebase/compat/app";

import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
    apiKey: "AIzaSyApFcuroXbwaVNOzljlXn4_16op0vu_BhQ",
    authDomain: "legendary-catalog.firebaseapp.com",
    projectId: "legendary-catalog",
    storageBucket: "legendary-catalog.appspot.com",
    messagingSenderId: "570364851117",
    appId: "1:570364851117:web:5070c79befe0e1296ae724",
    measurementId: "G-CLCB637K43"
}

firebase.initializeApp(config);

export const gAuth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => gAuth.signInWithPopup(provider);


export default firebase