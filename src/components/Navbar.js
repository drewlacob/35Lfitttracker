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
    "&:hover": {
      color: "yellow",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.navbar}>
      <Toolbar>
        <Typography className={classes.name}> 
          Name
        </Typography>
          <div className={classes.navlinks}>
            <Link to="/workouts" className={classes.link}> {/* TODO: Only links to workouts, needs to reset state of workouts */}
                <IconButton aria-label="app">
                  <AddIcon/>
                </IconButton>
            </Link>
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