import { firebaseConfig, getUserData, getHistory, writeUserData, addFitRecord } from './database.mjs'
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, update, child, get } from "firebase/database";

document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    console.log(app)
});

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    var app = initializeApp(firebaseConfig);
    var db = getDatabase(app);    

    firebase.auth().signInWithPopup(provider)
        .then(result => {
        const user = result.user;
        writeUserData(db, "id", user.displayName, user.email);
        // document.write("Hello " + user.displayName + '<br>');
        // document.write("Your email is " + user.email);
        // window.location.href = "newPage.html";        
    }) 
    }
