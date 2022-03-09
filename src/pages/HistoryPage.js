import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import Button from '@mui/material/Button';
import NavBar from '../components/NavBar.js'
import { textAlign } from '@material-ui/system';
const axios = require('axios');
const webadd = "http://localhost:8888/info?user=2022"

var after;
var yolo;


// Make a request for a user with a given ID
//


export default function HistoryPage() {
// Make a request for a user with a given ID
window.fromHistory = 1;
if(window.fromhist === 1){
  window.fromhist = 0;
    window.location.reload();
  }
function updateFromHistory(input)
{
  window.current_workout = input
}
function updateDFromHistory(input)
{
  window.current_date = input
}
const navigate = useNavigate();
var workoutText = window.result.split(/(\s+)/);
var parsedWorkouts = [];
var parsedDates = [];
console.log(workoutText)

var currentDate = "";
for(var i = 0; i < workoutText.length; i++)
{

  if(workoutText[i].match(/[0-9]{1,2}\\[0-9]{1,2}\\2022/)){
    console.log("captured date:");
    console.log(workoutText[i]);
    currentDate = workoutText[i];
  }
  console.log("i is")
  console.log(i)
  if(workoutText[i].match(/^(?!.*(([0-9]{1,2}\\[0-9]{1,2}\\2022))).*/))
    {
      if(workoutText[i].match(/[^ ]/)){
        if(workoutText[i].match(/^[^\n ]*$/)){
          console.log("length")
          console.log(parsedWorkouts.push(workoutText[i]));
          console.log("pushing current date")
          console.log(currentDate)
          console.log(parsedDates.push(currentDate));
          console.log(i);
        }
}
}
}
console.log(parsedWorkouts)
var workoutNum = 0;
    function getWorkoutName(input){
      workoutNum++;
      console.log("won")
      console.log(workoutNum)
      return parsedWorkouts[input];
    }
    var dateNum = 0;
    function getCurDate(input){
      dateNum++;
      console.log("won")
      console.log(workoutNum)
      return parsedDates[input];
    }
    console.log(window.result)
    if(workoutText[1] === workoutText[5])
    {
      console.log("yay")
    }

    var numWorkouts = [];
    console.log("asdfasdf")
    console.log(parsedWorkouts.length)
    for(var i = 0; i < parsedWorkouts.length; i++)
    {
      numWorkouts.push(i);
    }


    function generate(element) {
      return numWorkouts.map((value) =>
        React.cloneElement(element, {
          key: value
        }),
      );
      }
    

const [dense, setDense] = React.useState(false);
const [secondary, setSecondary] = React.useState(true);
console.log("numwork:");
console.log(numWorkouts.length);
if(numWorkouts.length === 1){
  if(workoutText.length === 3 && workoutText[0].match("Error") && workoutText[1].match("\n")){
    return (
    
      <Box sx={{ flexGrow: 1}}>
      <h1 style = {{paddingTop:"10px"}}></h1>
      <NavBar></NavBar>
      <h1 style = {{paddingTop:"10px"}}></h1>
      <div>No workouts yet! Add a workout to view your history</div>
    </Box>);
  }
  return (
    <Box sx={{ flexGrow: 1}}>
       <h1 style = {{paddingTop:"10px"}}></h1>
      <NavBar></NavBar>
      <h1 style = {{paddingTop:"10px"}}></h1>
            <List dense={dense} sx={{ width: '200%', maxWidth: 360, bgcolor: 'background.blue'}}>
              
                <ListItem
                  secondaryAction={
                    <Button onClick={() => { updateDFromHistory(getCurDate(0)); updateFromHistory(getWorkoutName(0)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                    Start
                    </Button>
                  }
                >
                  <ListItemText
                    primary= {getWorkoutName(0)}
                    secondary={getCurDate(0)} 
                  />
                </ListItem>
            </List>
    </Box>
  );
}
else if(numWorkouts.length === 2){
  return (
    <Box sx={{ flexGrow: 1}}>
    <h1 style = {{paddingTop:"10px"}}></h1>
      <NavBar></NavBar>
      <h1 style = {{paddingTop:"10px"}}></h1>
          <List dense={dense} sx={{ width: '200%', maxWidth: 360, bgcolor: 'background.blue'}}>
            
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(0)); updateFromHistory(getWorkoutName(0)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(0)}
                  secondary={getCurDate(0)}
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(1)); updateFromHistory(getWorkoutName(1)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(1)}
                  secondary={getCurDate(1)}
                  
                />
              </ListItem>
              
          </List>
  </Box>
  );
}
else if(numWorkouts.length === 3){
  return (
    <Box sx={{ flexGrow: 1}}>
    <NavBar></NavBar>
    <h1 style = {{paddingTop:"10px"}}></h1>
      <NavBar></NavBar>
      <h1 style = {{paddingTop:"10px"}}></h1>
          <List dense={dense} sx={{ width: '200%', maxWidth: 360, bgcolor: 'background.blue'}}>
            
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(0)); updateFromHistory(getWorkoutName(0)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(0)}
                  secondary={getCurDate(0)}
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(1)); updateFromHistory(getWorkoutName(1)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(1)}
                  secondary={getCurDate(1)}
                  
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(2)); updateFromHistory(getWorkoutName(2)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(2)}
                  secondary={getCurDate(2)}
                  
                />
              </ListItem>
             
          </List>
  </Box>
  );
}
else if(numWorkouts.length === 4){
  return (
    <Box sx={{ flexGrow: 1}}>
    <NavBar></NavBar>
    <h1 style = {{paddingTop:"10px"}}></h1>
      <NavBar></NavBar>
      <h1 style = {{paddingTop:"10px"}}></h1>
          <List dense={dense} sx={{ width: '200%', maxWidth: 360, bgcolor: 'background.blue'}}>
            
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(0)); updateFromHistory(getWorkoutName(0)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(0)}
                  secondary={getCurDate(0)}
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(1)); updateFromHistory(getWorkoutName(1)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(1)}
                  secondary={getCurDate(1)}
                  
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(2)); updateFromHistory(getWorkoutName(2)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(2)}
                  secondary={getCurDate(2)}
                  
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(3)); updateFromHistory(getWorkoutName(3)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(3)}
                  secondary={getCurDate(3)}
                />
              </ListItem>
             
          </List>
  </Box>
  );
}
else if(numWorkouts.length === 5){
  return (
    <Box sx={{ flexGrow: 1}}>
    <NavBar></NavBar>
    <h1 style = {{paddingTop:"10px"}}></h1>
      <NavBar></NavBar>
      <h1 style = {{paddingTop:"10px"}}></h1>
          <List dense={dense} sx={{ width: '200%', maxWidth: 360, bgcolor: 'background.blue'}}>
            
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(0)); updateFromHistory(getWorkoutName(0)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(0)}
                  secondary={getCurDate(0)}
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(1)); updateFromHistory(getWorkoutName(1)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(1)}
                  secondary={getCurDate(1)}
                  
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(2)); updateFromHistory(getWorkoutName(2)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(2)}
                  secondary={getCurDate(2)}
                  
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(3)); updateFromHistory(getWorkoutName(3)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(3)}
                  secondary={getCurDate(3)}
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(4)); updateFromHistory(getWorkoutName(4)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(4)}
                  secondary={getCurDate(4)}
                  
                />
              </ListItem>
            
          </List>
  </Box>
  );
}
if(numWorkouts.length === 6){
  return (
    <Box sx={{ flexGrow: 1}}>
    <NavBar></NavBar>
    <h1 style = {{paddingTop:"10px"}}></h1>
      <NavBar></NavBar>
      <h1 style = {{paddingTop:"10px"}}></h1>
          <List dense={dense} sx={{ width: '200%', maxWidth: 360, bgcolor: 'background.blue'}}>
            
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(0)); updateFromHistory(getWorkoutName(0)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(0)}
                  secondary={getCurDate(0)}
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(1)); updateFromHistory(getWorkoutName(1)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(1)}
                  secondary={getCurDate(1)}
                  
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(2)); updateFromHistory(getWorkoutName(2)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(2)}
                  secondary={getCurDate(2)}
                  
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(3)); updateFromHistory(getWorkoutName(3)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(3)}
                  secondary={getCurDate(3)}
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(4)); updateFromHistory(getWorkoutName(4)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(4)}
                  secondary={getCurDate(4)}
                  
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(5)); updateFromHistory(getWorkoutName(5)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(5)}
                  secondary={getCurDate(5)}
                  
                />
              </ListItem>
           
          </List>
  </Box>
  );
}
else if(numWorkouts.length === 7){
  return (
    <Box sx={{ flexGrow: 1}}>
    <NavBar></NavBar>
    <h1 style = {{paddingTop:"10px"}}></h1>
      <NavBar></NavBar>
      <h1 style = {{paddingTop:"10px"}}></h1>
          <List dense={dense} sx={{ width: '200%', maxWidth: 360, bgcolor: 'background.blue'}}>
            
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(0)); updateFromHistory(getWorkoutName(0)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(0)}
                  secondary={getCurDate(0)}
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(1)); updateFromHistory(getWorkoutName(1)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(1)}
                  secondary={getCurDate(1)}
                  
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(2)); updateFromHistory(getWorkoutName(2)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(2)}
                  secondary={getCurDate(2)}
                  
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(3)); updateFromHistory(getWorkoutName(3)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(3)}
                  secondary={getCurDate(3)}
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(4)); updateFromHistory(getWorkoutName(4)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(4)}
                  secondary={getCurDate(4)}
                  
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(5)); updateFromHistory(getWorkoutName(5)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(5)}
                  secondary={getCurDate(5)}
                  
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(6)); updateFromHistory(getWorkoutName(6)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(6)}
                  secondary={getCurDate(6)}
                />
              </ListItem>
             
          </List>
  </Box>
  );
}
else if(numWorkouts.length === 8){
  return (
    <Box sx={{ flexGrow: 1}}>
    <NavBar></NavBar>
    <h1 style = {{paddingTop:"10px"}}></h1>
      <NavBar></NavBar>
      <h1 style = {{paddingTop:"10px"}}></h1>
          <List dense={dense} sx={{ width: '200%', maxWidth: 360, bgcolor: 'background.blue'}}>
            
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(0)); updateFromHistory(getWorkoutName(0)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(0)}
                  secondary={getCurDate(0)}
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(1)); updateFromHistory(getWorkoutName(1)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(1)}
                  secondary={getCurDate(1)}
                  
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(2)); updateFromHistory(getWorkoutName(2)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(2)}
                  secondary={getCurDate(2)}
                  
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(3)); updateFromHistory(getWorkoutName(3)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(3)}
                  secondary={getCurDate(3)}
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(4)); updateFromHistory(getWorkoutName(4)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(4)}
                  secondary={getCurDate(4)}
                  
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(5)); updateFromHistory(getWorkoutName(5)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(5)}
                  secondary={getCurDate(5)}
                  
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(6)); updateFromHistory(getWorkoutName(6)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(6)}
                  secondary={getCurDate(6)}
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(7)); updateFromHistory(getWorkoutName(7)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(7)}
                  secondary={getCurDate(7)}
                  
                />
              </ListItem>
            
          </List>
  </Box>
  );
}
else if(numWorkouts.length === 9){
  return (
    <Box sx={{ flexGrow: 1}}>
    <NavBar></NavBar>
    <h1 style = {{paddingTop:"10px"}}></h1>
      <NavBar></NavBar>
      <h1 style = {{paddingTop:"10px"}}></h1>
          <List dense={dense} sx={{ width: '200%', maxWidth: 360, bgcolor: 'background.blue'}}>
            
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(0)); updateFromHistory(getWorkoutName(0)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(0)}
                  secondary={getCurDate(0)}
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(1)); updateFromHistory(getWorkoutName(1)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(1)}
                  secondary={getCurDate(1)}
                  
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(2)); updateFromHistory(getWorkoutName(2)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(2)}
                  secondary={getCurDate(2)}
                  
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(3)); updateFromHistory(getWorkoutName(3)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(3)}
                  secondary={getCurDate(3)}
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(4)); updateFromHistory(getWorkoutName(4)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(4)}
                  secondary={getCurDate(4)}
                  
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(5)); updateFromHistory(getWorkoutName(5)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(5)}
                  secondary={getCurDate(5)}
                  
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(6)); updateFromHistory(getWorkoutName(6)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(6)}
                  secondary={getCurDate(6)}
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(7)); updateFromHistory(getWorkoutName(7)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(7)}
                  secondary={getCurDate(7)}
                  
                />
              </ListItem>
              <ListItem
                secondaryAction={
                  <Button onClick={() => { updateDFromHistory(getCurDate(8)); updateFromHistory(getWorkoutName(8)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                  Start
                  </Button>
                }
              >
                <ListItemText
                  primary= {getWorkoutName(8)}
                  secondary={getCurDate(8)}
                  
                />
              </ListItem>
            
          </List>
  </Box>
  );
}
else if(numWorkouts.length === 10){
  return (
    <Box sx={{ flexGrow: 1}}>
      <NavBar></NavBar>
      <h1 style = {{paddingTop:"10px"}}></h1>
      <NavBar></NavBar>
      <h1 style = {{paddingTop:"10px"}}></h1>
            <List dense={dense} sx={{ width: '200%', maxWidth: 360, bgcolor: 'background.blue'}}>
              
                <ListItem
                  secondaryAction={
                    <Button onClick={() => { updateDFromHistory(getCurDate(0)); updateFromHistory(getWorkoutName(0)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                    Start
                    </Button>
                  }
                >
                  <ListItemText
                    primary= {getWorkoutName(0)}
                    secondary={getCurDate(0)}
                  />
                </ListItem>
                <ListItem
                  secondaryAction={
                    <Button onClick={() => { updateDFromHistory(getCurDate(1)); updateFromHistory(getWorkoutName(1)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                    Start
                    </Button>
                  }
                >
                  <ListItemText
                    primary= {getWorkoutName(1)}
                    secondary={getCurDate(1)}
                    
                  />
                </ListItem>
                <ListItem
                  secondaryAction={
                    <Button onClick={() => { updateDFromHistory(getCurDate(2)); updateFromHistory(getWorkoutName(2)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                    Start
                    </Button>
                  }
                >
                  <ListItemText
                    primary= {getWorkoutName(2)}
                    secondary={getCurDate(2)}
                    
                  />
                </ListItem>
                <ListItem
                  secondaryAction={
                    <Button onClick={() => { updateDFromHistory(getCurDate(3)); updateFromHistory(getWorkoutName(3)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                    Start
                    </Button>
                  }
                >
                  <ListItemText
                    primary= {getWorkoutName(3)}
                    secondary={getCurDate(3)}
                  />
                </ListItem>
                <ListItem
                  secondaryAction={
                    <Button onClick={() => { updateDFromHistory(getCurDate(4)); updateFromHistory(getWorkoutName(4)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                    Start
                    </Button>
                  }
                >
                  <ListItemText
                    primary= {getWorkoutName(4)}
                    secondary={getCurDate(4)}
                    
                  />
                </ListItem>
                <ListItem
                  secondaryAction={
                    <Button onClick={() => { updateDFromHistory(getCurDate(5)); updateFromHistory(getWorkoutName(5)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                    Start
                    </Button>
                  }
                >
                  <ListItemText
                    primary= {getWorkoutName(5)}
                    secondary={getCurDate(5)}
                    
                  />
                </ListItem>
                <ListItem
                  secondaryAction={
                    <Button onClick={() => { updateDFromHistory(getCurDate(6)); updateFromHistory(getWorkoutName(6)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                    Start
                    </Button>
                  }
                >
                  <ListItemText
                    primary= {getWorkoutName(6)}
                    secondary={getCurDate(6)}
                  />
                </ListItem>
                <ListItem
                  secondaryAction={
                    <Button onClick={() => { updateDFromHistory(getCurDate(7)); updateFromHistory(getWorkoutName(7)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                    Start
                    </Button>
                  }
                >
                  <ListItemText
                    primary= {getWorkoutName(7)}
                    secondary={getCurDate(7)}
                    
                  />
                </ListItem>
                <ListItem
                  secondaryAction={
                    <Button onClick={() => { updateDFromHistory(getCurDate(8)); updateFromHistory(getWorkoutName(8)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                    Start
                    </Button>
                  }
                >
                  <ListItemText
                    primary= {getWorkoutName(8)}
                    secondary={getCurDate(8)}
                    
                  />
                </ListItem>
                <ListItem
                  secondaryAction={
                    <Button onClick={() => { updateDFromHistory(getCurDate(9)); updateFromHistory(getWorkoutName(9)); navigate("/workouts") }} variant="contained" endIcon={<PlayCircleFilledWhiteIcon />}>
                    Start
                    </Button>
                  }
                >
                  <ListItemText
                    primary= {getWorkoutName(9)}
                    secondary={getCurDate(9)}
                    
                  />
                </ListItem>
            </List>
    </Box>
  );
}
else{
  console.log("i ran awwww");
  return <div>Whoops, something went wrong :(</div>;
}}
