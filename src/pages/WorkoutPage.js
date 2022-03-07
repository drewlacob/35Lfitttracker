import React, { useState, useEffect } from 'react'
import ExerciseCard from '../components/ExerciseCard.js'
import Content from '../components/Content.js'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from "@mui/icons-material/Delete";
import constants from '../assets/constants.js'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Navbar from '../components/Navbar.js'
import axios from 'axios'

function WorkoutPage(props) {
    const { title, date, count, userID } = props;
    let initialArray = [
        //{title: 'Pushup', imageUrl:"https://miro.medium.com/max/645/1*WZmDgcJO40Va5mVgdfbz7g@2x.jpeg", sets: '5', reps: '123', weight: '10', id: '0'}
      ];
    let exerciseInfo = constants;
    const [exerciseArray, setExerciseArray] = useState(initialArray);
    const [exerciseCount, setExerciseCount] = useState(0);
    const [workoutTitle, setWorkoutTitle] = useState(props.title);

    //dropdown button
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
      setAnchorEl(null);
    };
    function handleMenuOptionClick(exerciseType){
        setAnchorEl(null);
        addExercise(exerciseType);
    };
    //

    const getExerciseCard = exerciseCardObject => {
        return (
            <div>
            <ExerciseCard {...exerciseCardObject} />
            <IconButton>
              <DeleteIcon onClick={() => handleDelete(exerciseCardObject.id)}/>
            </IconButton>
            </div>
        );
      };

    function load(){

    }

    function save(){
        for (var i = 0, l = exerciseArray.length; i < l; i++) {
            var title = exerciseArray.title[i];
            var sets = exerciseArray.sets[i];
            var reps = exerciseArray.reps[i];
            var weight = exerciseArray.weight[i];
            axios.get("localhost:8888/addRecord?user=ID&date=DATE&workname=N&exer=E&s=S&r=R&w=W", {
                params: {
                user: 1234
                    }
                })
                .then(function (response) {
                console.log(response);
                    })
                .catch(function (error) {
                 console.log(error);
                })
                .then(function () {
            // always executed
                });  
        }

    };

    function handleDelete(id) {
      exerciseArray.splice(id+1, 1);
      setExerciseCount(exerciseCount-1);
      setExerciseArray(exerciseArray);
      //todo remove from list
    };

    function updateExercise(){
        //todo implement changing of exercise data to reflect in list
    }

    function addExercise(exerciseType) {
        
        //var key = exerciseCount-1;
        var result = exerciseInfo.find(obj => {
            return obj.title === exerciseType;
          })
        let data = {title: exerciseType, sets: '0', reps: '0', weight: '0', id: {exerciseCount},
                    desc: result.description, imageUrl: result.imageUrl};
        exerciseArray.push(data);
        setExerciseCount(exerciseCount + 1);
        setExerciseArray(exerciseArray);
        //alert(exerciseArray.length);
    };

    return (
      <Grid container direction="column">
        <Grid item>
          <h1>Navbar</h1>
          <h1> 
            <Button
            onClick={()=>{save();}}
            style = {{color: "white",
                     background:"green",
                    }}>
            Save Workout 
            </Button><span> {'   '} </span>
            <label>
      <input
        id='title'
        type='text'
        defaultValue = {workoutTitle}
        style = {{
            height: "52px",
            fontColor: "white",
            padding: "0px 16px",
            border: "none",
            textAlign: "center",
            borderRadius: "0px",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "normal",
            backgroundColor: "green",
            color: "white",
            outline: "none",
            boxShadow: "0px 4px 20px 0px transparent",
            margin:"auto" 
        }}
        onChange={e => {setWorkoutTitle(e.target.value);}}
      />
    </label>
            <span> {'   '} </span>
            <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleMenuClick}
        style = {{color: "white",
                     background:"green",
                }}
      >
        Add Exercise
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        direction="vertical"
      >
        <MenuItem onClick={()=>{handleMenuOptionClick("Pullup")}}>Pullup</MenuItem>
        <MenuItem onClick={()=>{handleMenuOptionClick("Pushup")}}>Pushup</MenuItem>
        <MenuItem onClick={()=>{handleMenuOptionClick("Situp")}}>Situp</MenuItem>
        <MenuItem onClick={()=>{handleMenuOptionClick("Squat")}}>Squat</MenuItem>
        <MenuItem onClick={()=>{handleMenuOptionClick("Bench Press")}}>Bench Press</MenuItem>
        <MenuItem onClick={()=>{handleMenuOptionClick("Deadlift")}}>Deadlift</MenuItem>
      </Menu>
            </h1>
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={8}>
              <Grid container justifyContent="center" >
                {exerciseArray.map(exerciseCardObject => getExerciseCard(exerciseCardObject))}
              </Grid>
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    )
}

/*
<Grid item container>
          <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={8}>
              <Grid container justifyContent="center" >
                {exerciseArray.map(exerciseCardObject => getExerciseCard(exerciseCardObject))}
              </Grid>
            <Content/>
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
*/

WorkoutPage.defaultProps = { title: "New Workout" }
export default WorkoutPage


/*<Button
            onClick={()=>addExercise()}
            style = {{color: "white",
                     background:"green",
                    }}>
            Add Exercise (current count: {exerciseCount} )
            </Button>*/