import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import Box from '@mui/material/Box'
import Input from '@material-ui/core/Input';
import ReactDOM from 'react-dom'
import WorkoutPage from '../pages/WorkoutPage'
import { ContactSupportOutlined } from '@material-ui/icons';

//window.ids = [];
window.data = [[]];

const ExerciseCard = props => {
  const { imageUrl, title, desc, sets, reps, weight, id } = props;

  console.log(props.id);
  
  /*var add = true;
  for (let i = 0; i < window.ids.length; i++) {
    if (window.ids[i] == props.title)
      add = false;
  }
  if (add) {
     console.log("Adding id " + props.id + " " + props.title + " " + props.sets + " " + props.reps + " " + props.weight);
     window.ids.push(props.id);
     console.log("Added to window ids: ID #: " + props.id);
     window.data[props.id] = [props.title, props.sets, props.reps, props.weight]; // initialize the sets, reps, and weight to 0's
<<<<<<< HEAD
     console.log("Initialized window data exercise: ");
     console.log(window.data[props.id]);
  }
=======
  }*/
  window.data[props.id] = [props.title, props.sets, props.reps, props.weight];
  console.log("data at props id" + window.data[props.id]);
  /*for (let i = 0; i < window.ids.length; i++) {
    if (window.data[i][1] == props.sets) {

    }
  }*/
>>>>>>> 6557fe464e61155b0a6f9c1e348a9956ee4290c4

  function handleChange(event, field)  {
    console.log("props id");
    console.log(props.id);
    switch(field) {
      case 0:
        window.data[props.id][1] = event.target.value;
        console.log("Changed sets to: " + window.data[props.id][1]);
        break;
      case 1:
        window.reps = event.target.value;
        window.data[props.id][2] = event.target.value;
        console.log("Changed reps to: " + window.data[props.id][2]);
        break;
      case 2:
        window.weights = event.target.value;
        window.data[props.id][3] = event.target.value;
        console.log("Changed weight to: " + window.data[props.id][3]);
        break;
      default:
        break;
    }
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
        defaultValue={sets}
        onChange={(e) => handleChange(e, 0)}
        type="number"
      />
        <TextField
        id="reps"
        label="Reps"
        InputLabelProps={{ shrink: true }}
        defaultValue={reps}
        onChange={(e) => handleChange(e, 1)}
        type="number"
      />
        <TextField
        id="weight"
        label="Weight"
        InputLabelProps={{ shrink: true }}
        defaultValue={weight}
        onChange={(e) => handleChange(e, 2)}
        type="number"
      />
      </CardActions>
    </Card>
  );
};

  ExerciseCard.defaultProps = { imageUrl: "na",
    title: "Exercise",
    desc: "Description not found",
    sets: 0,
    reps: 0,
    weight: 0 
  }

export default ExerciseCard;
