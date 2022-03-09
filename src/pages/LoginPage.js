import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import InputIcon from '@material-ui/icons/ExitToApp';
import TextField from '@material-ui/core/TextField';
import Stack from '@mui/material/Stack';
import Button from '@material-ui/core/Button';
 
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getUserData, getHistory, writeUserData, addFitRecord } from '../database.mjs'
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, update, child, get } from "firebase/database";
 
import ReactDOM from 'react-dom';
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
 
//const location = useLocation();
 
    const handleLogin = (response) => {
        console.log("Name: ", response.profileObj.name);
        console.log("Email: ", response.profileObj.email);
        sessionStorage.setItem("user_name", response.profileObj.name);
        sessionStorage.setItem("user_email", response.profileObj.email);
        sessionStorage.setItem("user_id", (window.user_email.split('@'))[0]);
       
        /*window.user_name = ;
        window.user_email = response.profileObj.email;
        window.user_id = (window.user_email.split('@'))[0];*/
        /*Object.freeze(window.user_email);
        Object.freeze(window.user_name);
        Object.freeze(window.user_id);*/
        //console.log("ID: ", window.user_id);
        axios.get('http://localhost:8888/addUser?user=' + window.user_id + '&name=' + window.user_name + '&email=' + window.user_email)
        .then(function (response) {
            console.log(response);
        })
        //console.log(window.user_id);
       
        window.location.href = "http://localhost:3000/workouts";
 
        //window.open("http://localhost:3000/workouts","_self");
        //console.log(window.user_email);
        return;
 
    }
 
    function handleFail() {
        return
    }
 
function LoginPage() {
   
    useEffect(() => {
        //console.log("first time");
        window.user_id = 'a';
        window.user_name = 'b';
        window.user_email = 'v';
        console.log(window.user_id);
      }, []);
 
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
                    {/* <Stack>
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
                    </Stack> */}
                    <h3><span> {''} </span></h3>
 
                    {/* <Button
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
                    </Button> */}
                    <GoogleLogin
                        clientId="591488866923-derl6gh19ssvf5s69227duns2lvo8dv9.apps.googleusercontent.com"
                        buttonText="Log in with Google"
                        onSuccess={handleLogin}
                        onFailure={handleLogin}
                        cookiePolicy={'single_host_origin'}
                    />
                </h3>
               
                {/* <a
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
                </a> */}
            </header>
        </div>            
    )
};
 
export default LoginPage

