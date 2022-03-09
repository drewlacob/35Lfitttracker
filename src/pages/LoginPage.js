import React, { useEffect } from 'react';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, update, child, get } from "firebase/database"; 
import GoogleLogin from 'react-google-login';
import axios from 'axios';
 
const firebaseConfig = {
    apiKey: "AIzaSyCx73o4Xoji7lIZNJkQPPJbj2cN_PTmnLU",
    authDomain: "test-8557f.firebaseapp.com",
    projectId: "test-8557f",
    storageBucket: "test-8557f.appspot.com",
    messagingSenderId: "354020103908",
    appId: "1:354020103908:web:4b38521a33843a6c0e7ef1",
    measurementId: "G-FR0ZBYGG34"
  };
 
  const firebaseConfig2 = {
    apiKey: "AIzaSyDTm5F8321tlyGf9LyVe1vfbIN2Q2HJUZs",
    authDomain: "testdatabase-d2671.firebaseapp.com",
    projectId: "testdatabase-d2671",
    storageBucket: "testdatabase-d2671.appspot.com",
    messagingSenderId: "598742770770",
    appId: "1:598742770770:web:cf3baa07f0561a47c12b8b"
  };
 
var app = initializeApp(firebaseConfig2);
var db = getDatabase(app);
 
 
const handleLogin = (response) => {
    sessionStorage.clear();
    const user_name = response.profileObj.name;
    const user_email = response.profileObj.email;
    const user_id = response.profileObj.email.split('@')[0];
    console.log("Name: ", user_name);
    console.log("Email: ", user_email);
    console.log("UID: ", user_id)
    sessionStorage.setItem("user_name", user_name);
    sessionStorage.setItem("user_email", user_email);
    sessionStorage.setItem("user_id", user_id);
       
    axios.get('http://localhost:8888/addUser?user=' + user_id + '&name=' + user_name + '&email=' + user_email)
    .then(function (response) {
        console.log(response);
    })
    window.location.href = "http://localhost:3000/workouts";
    return;
 
}
 
function handleFail() {
    return;
}
 
function LoginPage() {
    return (
        <div className="LoginPage">
            <header className="Login-header">
                <h1>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnXYB2fDOtIZfpYXb-cJli0tBPBpt9n6xoug&usqp=CAU" width="200" height="250"></img>
               
                </h1>
                <h2>FITTRACKER</h2>
                <h3>
                    Welcome to FITTRACKER!
                    Click below to login with a Google account
                    <h3><span> {''} </span></h3>
                    <GoogleLogin
                        clientId="591488866923-derl6gh19ssvf5s69227duns2lvo8dv9.apps.googleusercontent.com"
                        buttonText="Log in with Google"
                        onSuccess={handleLogin}
                        onFailure={handleFail}
                        cookiePolicy={'single_host_origin'}
                    />
                </h3>
            </header>
        </div>            
    )
};
 
export default LoginPage
