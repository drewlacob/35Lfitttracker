import React, { Component, useRef } from 'react'
import InputIcon from '@material-ui/icons/ExitToApp';
import TextField from '@material-ui/core/TextField';
import Stack from '@mui/material/Stack';
import Button from '@material-ui/core/Button';
import { makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ClassNames } from '@emotion/react';
import { ContactSupportOutlined } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        "& :first-child": {
            color: "#c9c9c9"
        }
    }
})

const cur_state = {
    email: "",
    password: "",
}

function isValidUser() {
    // TODO: if valid, return workouts; else, return login
    return "/workouts";
}

function LoginPage() {
    const classes = useStyles();
    return (
        <div className="LoginPage">
            <header className="Login-header">
                <h1>
                FIT TRACKER
                </h1>
                <h2>
                    <Stack className={classes.root}>
                        <TextField
                            hintText="Email"
                            floatingLabelText="Email"
                            type="email"
                            variant="filled"
                            label="email"
                            onChange={(e) => (cur_state.email = e.target.value)}
                        />
                        <TextField
                            hintText="Password"
                            floatingLabelText="Password"
                            type="password"
                            variant="filled"
                            label="password"
                            onChange={(e) => (cur_state.password = e.target.value)}
                        /> 
                    </Stack>
                    <h2><span> {''} </span></h2>
                    <Button
                        component={Link}
                        // TODO: on click, send current email and password to backend and see if it is valid
                        to={isValidUser()}
                        startIcon={<InputIcon />}
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