import React from "react";
import AddIcon from '@mui/icons-material/Add';
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton, 
  Button
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";
let name = sessionStorage.getItem("user_name");
const axios = require('axios');


/*const useStyles = makeStyles((theme) => ({
  navbar: {
    background: "linear-gradient(45deg, #cceffc, #ccd9de)", 
    color: "black",
    boxShadow: "1px 1px 1px 1px",
    position: "fixed"
  },
  navlinks: {
    marginLeft: theme.spacing(160),
  },
  name: {
    marginLeft: theme.spacing(2),
  },
  link: {
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(2),
  },
}));*/

function Navbar() {
  const navigate = useNavigate();
  function updateHistory(){
    let UID = sessionStorage.getItem("user_id");
    axios.get('http://localhost:8888/allHist?user=' + UID)
            .then(function (response) {
      // handle success
               window.result = response.data;
               console.log("Just got it");
               console.log(window.result);
             })
             .catch(function (error) {
      // handle error
               console.log(error);
            })
            .then(function () {
          // always executed
           });
          
  }
  //const classes = useStyles();

  function newWorkout() {
    window.location.reload(false)
  }

  return (
    <AppBar>
      <Toolbar style={{ background: '#5795DE' }}>
        <Typography style={{fontFamily: "copperplate"}}> 
          {name}
        </Typography>
          <div>
            <Link to="/workouts" onClick={() => { window.current_workout = ""; window.open("http://localhost:3000/workouts","_self") }}>
              <AddIcon style={{ paddingRight: "15px", paddingLeft: "15px"}}/>
            </Link>
            <Link to="/history" onClick={() => { window.fromhist = 1; window.open("http://localhost:3000/history","_self") }} >
              <HistoryIcon style={{ paddingRight: "15px", paddingLeft: "15px"}}/>
            </Link>
            <Link style={{float: 'right'}} to="/login" align="right" onClick={() => { sessionStorage.clear(); window.open("http://localhost:3000/login", "_self")}} >
              <LogoutIcon style={{ paddingRight: "15px", paddingLeft: "15px"}}/>
            </Link>
          </div>
          {/* <View style={{ display:'flex',  flexDirection:"row", justifyContent:'center', alignItems:'center'}}>
          <text style={{ display:'flex',  flexDirection:"row", justifyContent:'center', alignItems:'center'}}> 
          FITTRACKER
        </text>
        </View> */}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;

/*
<Link to="/workouts" className={classes.link}> {}
                <IconButton aria-label="app" onClick={()=>WorkoutPage.newWorkout()}>
                  <AddIcon/>
                </IconButton>
            </Link> 
              <IconButton onClick={()=>newWorkout()}>
                <AddIcon/>
            </IconButton>
            <IconButton>
                  <HistoryIcon/>
                </IconButton> */

  /*<AppBar className={classes.navbar}>
      <Toolbar>
        <Typography className={classes.name}> 
          Name
        </Typography>
          <div className={classes.navlinks}>
            <IconButton aria-label="app" onClick={()=>newWorkout()}>
                  <AddIcon/>
            </IconButton>
            <Link to="/history" className={classes.link}>
                <IconButton aria-label="app">
                  <HistoryIcon/>
                </IconButton>
            </Link>
          </div>
      </Toolbar>
    </AppBar>*/
