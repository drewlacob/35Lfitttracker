import React from 'react'
import InputIcon from '@material-ui/icons/ExitToApp';
import TextField from '@material-ui/core/TextField';
import Stack from '@mui/material/Stack';
import Button from '@material-ui/core/Button';

// import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getUserData, getHistory, writeUserData, addFitRecord } from '../database.mjs'
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, update, child, get } from "firebase/database";

import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

const firebaseConfig = {
    apiKey: "AIzaSyCx73o4Xoji7lIZNJkQPPJbj2cN_PTmnLU",
    authDomain: "test-8557f.firebaseapp.com",
    projectId: "test-8557f",
    storageBucket: "test-8557f.appspot.com",
    messagingSenderId: "354020103908",
    appId: "1:354020103908:web:4b38521a33843a6c0e7ef1",
    measurementId: "G-FR0ZBYGG34"
  };
  
var app = initializeApp(firebaseConfig);
var db = getDatabase(app); 

var user_id = '';
var user_name = '';
var user_email = '';

// function googleLogin() {

//     <head>
//     <script defer src="/__/firebase/9.6.7/firebase-app-compat.js"></script>
//     <script defer src="/__/firebase/9.6.7/firebase-auth-compat.js"></script>
//     <script defer src="/__/firebase/9.6.7/firebase-database-compat.js"></script>
//     <script defer src="/__/firebase/9.6.7/firebase-firestore-compat.js"></script>
//     <script defer src="/__/firebase/9.6.7/firebase-functions-compat.js"></script>
//     <script defer src="/__/firebase/9.6.7/firebase-messaging-compat.js"></script>
//     <script defer src="/__/firebase/9.6.7/firebase-storage-compat.js"></script>
//     <script defer src="/__/firebase/9.6.7/firebase-analytics-compat.js"></script>
//     <script defer src="/__/firebase/9.6.7/firebase-remote-config-compat.js"></script>
//     <script defer src="/__/firebase/9.6.7/firebase-performance-compat.js"></script>
//     <script defer src="/__/firebase/init.js?useEmulator=true"></script>
//     </head>
//     // document.write("hello");
//     // window.location.href = "http://localhost:3000/workouts";
//     const provider = new firebase.auth.GoogleAuthProvider();
//     // var app = initializeApp(firebaseConfig);
//     // var db = getDatabase(app);    

//     firebase.auth().signInWithPopup(provider)
//         .then(result => {
//         const user = result.user;
//         writeUserData(db, "id", user.displayName, user.email);
//         // document.write("Hello " + user.displayName + '<br>');
//         // document.write("Your email is " + user.email);
                
//     }) 
//     }

    const handleLogin = (response) => {
        console.log("Name: ", response.profileObj.name);
        console.log("Email: ", response.profileObj.email);
        user_name = response.profileObj.namel
        user_email = response.profileObj.email;
        writeUserData(db, "id", response.profileObj.name, response.profileObj.email);
        window.open("http://localhost:3000/workouts","_self");

        // window.location.href = "http://localhost:3000/workouts";
        return;

    }

    function handleFail() {
        return 
    }

function LoginPage() {
    return (
        <div className="LoginPage">
            <header className="Login-header">
                <h1>
                FITTRACKER
                </h1>
                <h2>
                    <Stack>
                        <TextField
                            hintText="Email"
                            floatingLabelText="Email"
                            type="email"
                            variant="filled"
                            label="email"
                        />
                        <TextField
                            hintText="Password"
                            floatingLabelText="Password"
                            type="password"
                            variant="filled"
                            label="password"
                        /> 
                    </Stack>
                    <h2><span> {''} </span></h2>
                    {/* <script src="/__/firebase/7.14.2/firebase-app.js"></script>
                    <script src="/__/firebase/7.14.2/firebase-auth.js"></script>
                    <script src="/__/firebase/7.14.2/firebase-database.js"></script>
                    <script src="/__/firebase/7.14.2/firebase-firestore.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/firebase/8.2.2/firebase-app.min.js"></script>
                    <script src="https://www.gstatic.com/firebasejs/7.14.3/firebase-analytics.js"></script>
                    <script src="/__/firebase/init.js"></script>
                    <script src="/Users/briantaylor/35l/35Lfitttracker/src/login.js"></script> */}
                    <Button 
                        startIcon = {<InputIcon/>}
                        style={{
                            borderRadius: 35,
                            background: 'linear-gradient(45deg, #5bab65, #07fa28)',
                            padding: "18px 36px",
                            fontSize: "18px",
                            color: "white",
                            padding: "10px 120px"
                            }}
                        variant="contained"
                    >
                    LOGIN
                    </Button>
                    <GoogleLogin
    clientId="591488866923-derl6gh19ssvf5s69227duns2lvo8dv9.apps.googleusercontent.com"
    buttonText="Log in with Google"
    onSuccess={handleLogin}
    // isSignedIn={true}
    onFailure={handleLogin}
    cookiePolicy={'single_host_origin'}
/>
                </h2>
                
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        borderRadius: 35,
                        background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
                        padding: "18px 36px",
                        fontSize: "18px",
                        color: "white",
                        padding: "10px 60px"
                        }}
                >
                New member? Create account
                </a>
            </header>
        </div>            
    )
};

export default LoginPage
