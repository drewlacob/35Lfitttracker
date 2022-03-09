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

window.ids = [];
window.data = [[]];

var state = 0;

const ExerciseCard = props => {
  const { imageUrl, title, desc, sets, reps, weight, id } = props;

  var add = true;
  for (let i = 0; i < window.ids.length; i++) {
    if (window.ids[i] == props.id)
      add = false;
  }
  if (add) {
     window.ids.push(props.id);
     window.data[props.id] = [props.title, 0, 0, 0]; // initialize the sets, reps, and weight to 0's
  }

  function handleChange(event, field)  {
    switch(field) {
      case 0:
        //console.log(props.sets);
        //console.log("props id");
        //console.log(props.id);
        window.data[props.id][1] = event.target.value;
        break;
      case 1:
        window.reps = event.target.value;
        window.data[props.id][2] = event.target.value;
        break;
      case 2:
        window.weights = event.target.value;
        window.data[props.id][3] = event.target.value;
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
