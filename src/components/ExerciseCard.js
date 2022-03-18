import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, useEffect, useRef } from 'react'
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import Box from '@mui/material/Box'
import Input from '@material-ui/core/Input';
import ReactDOM from 'react-dom'
import WorkoutPage from '../pages/WorkoutPage'
import { ContactSupportOutlined } from '@material-ui/icons';
import { SettingsInputAntennaTwoTone } from '@material-ui/icons';

//window.ids = [];
window.data = [[]];
window.cameFromDelete = 0;
//window.prevArray = [[0, 0, 0]];
window.prevSetArray = [];
window.prevRepArray = [];
window.prevWeightArray = [];

const ExerciseCard = props => {
  const { imageUrl, title, desc, sets, reps, weight, id } = props;

  console.log(props.sets);
  var new_sets = props.sets;
  const [numSets, setSets] = useState(props.sets);
  const [numReps, setReps] = useState(props.reps);
  const [numWeight, setWeight] = useState(props.weight);

  /*const prevSetRef = useRef();
  const prevRepRef = useRef();
  const prevWeightRef = useRef();
  useEffect(() => {
    //assign the ref's current value to the count Hook
    prevSetRef.current = numSets;
    prevRepRef.current = numReps;
    prevWeightRef.current = numWeight;
  }, [numSets, numReps]);//, numReps, numWeight]); //run this code when the value of count changes*/

  //console.log("State sets" + numSets);
  console.log("ID" + props.id);
  console.log("sets" + props.sets);
  console.log("reps" + props.reps);
  console.log("weight" + props.weight);

  var add = true;
  for (let i = 0; i < window.data.length; i++) {
    if (window.data[i][0] == props.title && window.cameFromDelete === 0) {
      add = false; // don't add if the exercise title already exists in window.data
    }
  }
  if (add) {
    console.log("Adding id " + props.id + " " + props.title + " " + props.sets + " " + props.reps + " " + props.weight);
    window.data[props.id] = [props.title, props.sets, props.reps, props.weight]; // initialize the sets, reps, and weight to 0's
    console.log(window.data[props.id]);
    window.prevSetArray[props.id] = props.sets; 
    window.prevRepArray[props.id] = props.reps; 
    window.prevWeightArray[props.id] = props.weight; 
    console.log("DONE");
    //console.log(window.prevArray);
  }
  else {
    console.log("Window data" + window.data);
  }

  function handleChange(event, field)  {
    console.log(window.cameFromDelete);
    console.log("props id");
    console.log(props.id);
    console.log("Came from delete?" + window.cameFromDelete);
    if (window.cameFromDelete) {
      field = -1;
    }
    switch(field) {
      case 0:
        window.data[props.id][1] = event.target.value;
        window.prevSetArray[props.id] = event.target.value;
        console.log(window.prevSetArray[props.id]);
        setSets(event.target.value);
        break;
      case 1:
        window.data[props.id][2] = event.target.value;
        window.prevRepArray[props.id] = event.target.value;
        setReps(event.target.value);
        break;
      case 2:
        window.data[props.id][3] = event.target.value;
        window.prevWeightArray[props.id] = event.target.value;
        setWeight(event.target.value);
        break;
      default:
        console.log("yeeeee");
        window.data[props.id][1] = window.prevSetArray[props.id];
        window.data[props.id][2] = window.prevRepArray[props.id];
        window.data[props.id][3] = window.prevWeightArray[props.id];
        break;
    }
    window.cameFromDelete = 0;
  };

  return (
    <Card style = {{padding:"40px", margin:"20px", width: "600px", height: "530px"}}>
      <CardHeader
        title={title}
      />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
      <CardMedia style={{ height: "300px", width: '55%'}} 
                 image={imageUrl}/>
      </Box>
      <CardContent>
        <Typography variant="body2" component="p">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
      <TextField
        id="sets"
        label="Sets"
        InputLabelProps={{ shrink: true }}
        //defaultValue={sets}
        //defaultValue={numSets}
        value={window.prevSetArray[props.id]}
        onChange={(e) => handleChange(e, 0)}
        /*onKeyPress={(e) => {
          if (e.key === "Enter") {
            console.log("Val" + e.target.value);
            handleChange(e, 0, 1);
          }}}*/
        type="number"
      />
        <TextField
        id="reps"
        label="Reps"
        InputLabelProps={{ shrink: true }}
        value={window.prevRepArray[props.id]}
        //value={numReps}
        onChange={(e) => handleChange(e, 1)}
        type="number"
      />
        <TextField
        id="weight"
        label="Weight"
        InputLabelProps={{ shrink: true }}
        value={window.prevWeightArray[props.id]}
        //value={numWeight}
        onChange={(e) => handleChange(e, 2)}
        type="number"
      />
      </CardActions>
    </Card>
  );
};

/*ExerciseCard.getDerivedStateFromProps = (nextProps) => {    
  return {
    numSets: nextProps.sets,
  }
}*/

  ExerciseCard.defaultProps = { imageUrl: "na",
    title: "Exercise",
    desc: "Description not found",
    sets: 0,
    reps: 0,
    weight: 0 
  }

export default ExerciseCard;