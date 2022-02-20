import React from 'react'
import InputIcon from '@material-ui/icons/ExitToApp';
import { Fragment } from "react";
import TextField from '@material-ui/core/TextField';
import Stack from '@mui/material/Stack';
import Button from '@material-ui/core/Button';

const space = <Fragment>&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>

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
                        />
                        <TextField
                            hintText="Email"
                            floatingLabelText="Email"
                            type="email"
                            variant="filled"
                        /> 
                    </Stack>
                    <h2><span> {''} </span></h2>
                    <Button
                        startIcon = {<InputIcon/>}
                        style={{
                            borderRadius: 35,
                            backgroundColor: "#1bd12e",
                            padding: "18px 36px",
                            fontSize: "18px",
                            color: "white",
                            }}
                        variant="contained"
                    >
                    LOGIN
                    </Button>
                </h2>
                <span> {space} </span>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        borderRadius: 35,
                        backgroundColor: "#f44336",
                        padding: "18px 36px",
                        fontSize: "18px",
                        color: "white"
                        }}
                >
                New member? Create account
                </a>
            </header>
        </div>            
    )
};

export default LoginPage
