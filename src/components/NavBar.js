import React from "react";
import AddIcon from '@mui/icons-material/Add';
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton, 
} from "@material-ui/core";
import { Link } from "react-router-dom";
import HistoryIcon from "@mui/icons-material/History";
import WorkoutPage from '../pages/WorkoutPage'


const useStyles = makeStyles((theme) => ({
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
}));

function Navbar() {
  const classes = useStyles();

  function newWorkout() {
    window.location.reload(false)
  }

  return (
    <AppBar className={classes.navbar}>
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
    </AppBar>
  );
}
export default Navbar;

/*
<Link to="/workouts" className={classes.link}> {}
                <IconButton aria-label="app" onClick={()=>WorkoutPage.newWorkout()}>
                  <AddIcon/>
                </IconButton>
            </Link> */
