import React from 'react'
import InputIcon from '@material-ui/icons/ExitToApp';
import TextField from '@material-ui/core/TextField';
import Stack from '@mui/material/Stack';
import Button from '@material-ui/core/Button';

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
