import React, { useState, useEffect } from 'react'
import ExerciseCard from '../components/ExerciseCard.js'
import Content from '../components/Content.js'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Navbar from '../components/NavBar.js'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from "@mui/icons-material/Delete";
import constants from '../assets/constants.js'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom'

function WorkoutPage(props) {
    const navigate = useNavigate();
    const { title, date, count, userID, cameFromHistory } = props;
    const axios = require('axios');
    
    //console.log("User name");
    //let name = sessionStorage.getItem("user_name");
    //console.log(name);
    let initialArray = [
        //{title: 'Pushup', imageUrl:"https://miro.medium.com/max/645/1*WZmDgcJO40Va5mVgdfbz7g@2x.jpeg", sets: '5', reps: '123', weight: '10', id: '0'}
      ];
    let exerciseInfo = constants;
    const d = new Date();
    const [exerciseArray, setExerciseArray] = useState(initialArray);
    const [exerciseCount, setExerciseCount] = useState(0);
    const [workoutTitle, setWorkoutTitle] = useState(window.current_workout);
    const [stateUserID, setUserID] = useState(sessionStorage.getItem("user_id"));
    const [stateDate, setDate] = useState((d.getMonth()+1) + "\\" + (d.getDate()) + "\\" + d.getFullYear());

    //console.log("Date");

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

    useEffect(() => {
      //cameFromHistory = true;
      if (window.fromHistory === 1) {

        setDate(window.current_date);
        load();
      
      }
    }, []);
    
    //was in get exercise card
    /*            <IconButton>
              <DeleteIcon onClick={() => handleDelete(exerciseCardObject.id)}/>
            </IconButton>*/
    const getExerciseCard = exerciseCardObject => {
      /*let cur_id = exerciseCardObject.id;
      console.log("curid" + cur_id);
      exerciseArray[cur_id].sets = window.data[cur_id][1];*/
      console.log("getting exercise card");
        return (
            <div>
            <ExerciseCard {...exerciseCardObject} />
            <IconButton>
              <DeleteIcon id="delete" onClick={() => handleDelete(exerciseCardObject.id)}/>
            </IconButton>
            </div>
        );
      };
      //handleDelete(exerciseCount-1)
    function load() {
      window.cameFromDelete = 0;
      var userID = stateUserID;
      console.log(sessionStorage.getItem("user_id"));
      console.log("userid" + userID);
      var date = stateDate;
      var workoutName = workoutTitle;
      console.log("LOADING: ");
      console.log("userID: " + userID);
      console.log("date: " + date);
      console.log("workoutName: " + workoutName);
      var httpstring = 'http://localhost:8888/history?user=' + userID +
                      '&date=' + date + '&workname=' + workoutName;
      console.log(httpstring);
      axios.get(httpstring)
      .then(function (response) {
      // handle success
        if (response.data === "Error\n") {
          return;
        }
        console.log("Response: " + response.data + response.data.length);
        console.log(response.data.search("\n"));
        var exerciseData = [];
        console.log((response.data.match(/\n/g) || []).length);
        if (response.data.search("\n") !== -1) { // contains newlines
          exerciseData = response.data.split("\n");
        }
        console.log("Data split by newline: " + exerciseData);
        //if exerciseData.length
        console.log("exer length" + exerciseData.length);
        const l = exerciseData.length - 1;
        var exer = [];
        for (var i = 0; i < l; i++) {
          //setExerciseCount(exerciseCount + 1);
          if (exerciseData[i].search("Bench") != -1) {
            var temp_exer = exerciseData[i].split(' ');
            exer[0] = "Bench Press";
            exer[1] = temp_exer[2];
            exer[2] = temp_exer[3];
            exer[3] = temp_exer[4];
          }
          else {
            exer = exerciseData[i].split(' '); 
          }
          console.log(exer[0] + exer[0].length);
          var result = exerciseInfo.find(obj => {
          return obj.title === exer[0];
        })
        
        //console.log(result);
        let data = {title: exer[0], sets: exer[2], reps: exer[1], weight: exer[3], id: i,//exerciseCount,
        desc: result.description, imageUrl: result.imageUrl};
        //console.log("Pushing data:" + data);
        exerciseArray.push(data);
        setExerciseArray(exerciseArray);
        setExerciseCount(exerciseArray.length);
      }
      console.log(exerciseArray);
      console.log(exerciseArray.length);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
      // always executed
      });
    }

    function save() {
      var userID = stateUserID;
      var date = stateDate;
      var workoutName = workoutTitle;
      var clearhttp = "http://localhost:8888/clear?user=" + userID + "&date=" + date + "&workname=" + workoutName;
      console.log("Clearhttp: " + clearhttp);
      console.log("userID");
      console.log(userID);
      console.log("date");
      console.log(date);
      console.log("workoutName");
      console.log(workoutName);

      axios.get(clearhttp)
      .then(function (response) {
      // handle success
        console.log(response)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
      //console.log(window.data); // window.data contains all the data about all the exercises
      for (var i = 0, l = exerciseArray.length; i < l; i++) {
        console.log("Trying to save from window data: ");
        console.log(window.data);
        var title = exerciseArray[i].title;
        var sets = window.data[i][1];
        var reps = window.data[i][2];
        var weight = window.data[i][3];
      
        //var httpstring = "localhost:8888/addRecord?user=";
        var httpstring = "http://localhost:8888/addRecord?user=" +
                        userID + "&date=" + date + "&workname=" +
                        workoutName + "&exer=" + title + "&s=" +
                        sets + "&r=" + reps + "&w=" + weight;
        console.log("httpstring:");
        console.log(httpstring);
        axios.get(httpstring)
        .then(function (response) {
        // handle success
          navigate("/history");
          console.log(response)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
        window.fromhist = 1;
        navigate("/history");
        // always executed
        });
      }
      alert("Saved: " + workoutTitle);
        //todo implement saving to db
      // always executed
      });
   
    };

    function handleDelete(id) {
      setExerciseCount(exerciseArray.length);
      window.cameFromDelete = 1;
      console.log("deleting index " + id); //  G
      console.log("size of exerciseArray pre deletion " + exerciseArray.length);
      
      
      //console.log("exerciseArray indexes and sets pre deletion");  
      /*for (let i = 0; i < exerciseArray.length; i++) {
        console.log("id: " + exerciseArray[i].id); //stored as character!  
        console.log("sets: " + exerciseArray[i].sets);
      }*/
      window.data.splice(id, 1);

      exerciseArray.splice(id, 1);
      console.log("size of exerciseArray post deletion " + exerciseArray.length); 

      for (let i = id; i < exerciseArray.length; i++) { // adjust the id #s of the elements after the one deleted
        exerciseArray[i].id -= 1;
        //console.log("adjusting exerciseArray " + i);   G
      }
      for (let i = 0, l = exerciseArray.length; i < l; i++) {
        var t_sets = window.data[i][1];
        var t_reps = window.data[i][2];
        var t_weight = window.data[i][3];

        /*var t_title = exerciseArray[i].title;
        var t_desc = exerciseArray[i].desc;   // these 3 were commented out
        var t_imageUrl = exerciseArray[i].imageUrl;*/
        exerciseArray[i].sets = t_sets;
        exerciseArray[i].reps = t_reps;
        exerciseArray[i].weight = t_weight;
        //exerciseArray.splice(0, 1);
        /*let data = {title: t_title, sets: t_sets, reps: t_reps, weight: t_weight, id: i, //exerciseCount,
                    desc: t_desc, imageUrl: t_imageUrl};  // these 3 lines were commented out
        exerciseArray.push(data);*/
        //setExerciseArray(exerciseArray);
        //setExerciseCount(exerciseArray.length);
      }
      

      //setExerciseArray(exerciseArray);
      //console.log("exerciseArray indexes after deletion");    
      /*for (let i = 0; i < exerciseArray.length; i++) {
        console.log("id: " + exerciseArray[i].id); //stored as character!     
        console.log("sets: " + exerciseArray[i].sets);
      }*/
      
      console.log("Exercise array post deletion: " );
      console.log(exerciseArray);
      
      //setExerciseArray(exerciseArray);
      console.log("ExerciseCount post deletion: " + exerciseCount);
      setExerciseArray(exerciseArray);
      setExerciseCount(exerciseArray.length);
    };

    function addExercise(exerciseType) {
        window.cameFromDelete = 0;
        console.log(exerciseType + exerciseType.length);
        var result = exerciseInfo.find(obj => {
            return obj.title === exerciseType;
          })
        let data = {title: exerciseType, sets: '0', reps: '0', weight: '0', id: exerciseArray.length, //exerciseCount,
                    desc: result.description, imageUrl: result.imageUrl};
        exerciseArray.push(data);
        setExerciseArray(exerciseArray);
        setExerciseCount(exerciseArray.length);
        console.log("NEW EXERCISE ARRAY AFTER ADD: ");
        console.log(exerciseArray);
        console.log(window.data);
        console.log("Exericse Count AFTER ADD: " + exerciseCount);
        //alert(exerciseArray.length);
    };

    return (
      <Grid container direction="column">
        <Grid item>
        <h1 style = {{paddingTop: "10px"}}></h1>
          <Navbar></Navbar>
          <h1 style = {{paddingTop: "10px"}}></h1>
          <h1> 
            <Button
            onClick={()=>{save()}}
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

// TODO: change cameFromHistory to false!
WorkoutPage.defaultProps = { title: "NewWorkout", date: "03\\11\\2022", count: 0, userID: "1234", cameFromHistory: true }
export default WorkoutPage

/*<Button
            onClick={()=>addExercise()}
            style = {{color: "white",
                     background:"green",
                    }}>
            Add Exercise (current count: {exerciseCount} )
            </Button>*/
