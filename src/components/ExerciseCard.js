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

const ExerciseCard = props => {
  const { imageUrl, title, desc, sets, reps, weight } = props;

  const handleChange = (event) => {
    sets = event.target.value;
  };

  return (
    <Card style = {{padding:"10px", margin:"20px", width: "600px", height: "530px"}}>
      <CardHeader
        action={
          <IconButton aria-label="delete">
            <DeleteIcon/>
          </IconButton>
        }
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
        onChange={handleChange}
        type="number"
      />
        <TextField
        id="reps"
        label="Reps"
        InputLabelProps={{ shrink: true }}
        defaultValue={reps}
        onChange={handleChange}
        type="number"
      />
        <TextField
        id="weight"
        label="Weight"
        InputLabelProps={{ shrink: true }}
        defaultValue={weight}
        onChange={handleChange}
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
    weight: 0 }

export default ExerciseCard;