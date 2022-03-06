import React, { useState, useEffect } from 'react'
import ExerciseCard from '../components/ExerciseCard.js'
import Content from '../components/Content.js'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import NavBar from '../components/NavBar.js'

function WorkoutPage(props) {
    const { title, date, count, userID } = props;
    let initialArray = [
        {title: 'Pushup', sets: '5', reps: '123', weight: '10', id: '1'},
        {title: 'Situps', sets: '4', reps: '124', weight: '20', id: '2'},
      ];

    
    const [exerciseArray, setExerciseArray] = useState(initialArray);
    const [exerciseCount, setExerciseCount] = useState(2);
    //imageUrl, title, desc, sets, reps, weight


    const getExerciseCard = exerciseCardObject => {
        return (
            <ExerciseCard {...exerciseCardObject} />
        );
      };

    function save(){
        //todo implement saving to db
    };

    function handleDelete(){
        setExerciseCount(exerciseCount-1);
        //todo remove from list
    };

    function updateExercise(){
        //todo implement changing of exercise data to reflect in list
    }

    const addExercise = () => {
        setExerciseCount(exerciseCount + 1);
        let data = {title: 'Pullup', sets: '3', reps: '124', weight: '20', id: {exerciseCount}};
        exerciseArray.push(data);
        setExerciseArray(exerciseArray);
        alert(exerciseArray.length);
    };

    return (
        <Grid container direction="column">
        <Grid item>
          <NavBar></NavBar>
          <h1> 
            <Button
            style = {{color: "white",
                     background:"green",
                    }}>
            Save Workout 
            </Button><span> {'   '} </span>{props.title}
            <span> {'   '} </span>
            <Button
            onClick={()=>addExercise()}
            style = {{color: "white",
                     background:"green",
                    }}>
            Add Exercise Current count: {exerciseCount}
            </Button></h1>
        </Grid>
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
      </Grid>
    )
}

WorkoutPage.defaultProps = { title: "New Workout" }
export default WorkoutPage