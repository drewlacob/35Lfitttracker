import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid'
import ExerciseCard from "./ExerciseCard";

const Content = () => {
  //{ imageUrl, title, desc, sets, reps, weight}
  const listOfExercises = ["pullup.png", "Pullup", "Description", "0", "5", "10"]
  const getExerciseCard = exerciseCardObject => {
    return (
      <Grid item xs={12} sm={4}>
        <ExerciseCard {...exerciseCardObject} />
      </Grid>
    );
  };

  return (
    <Grid container justifyContent="center" >
      <ExerciseCard
        imageUrl="https://www.burnthefatinnercircle.com/members/images/1930.png"
        title="Pullup"
        desc="A pull-up is an upper-body strength exercise. 
        The pull-up is a closed-chain movement where the body 
        is suspended by the hands and pulls up.
        As this happens, the elbows flex and the shoulders adduct
         and extend to bring the elbows to the torso."
        sets="5"
        reps="10"
        weight="25">
        </ExerciseCard>
        <ExerciseCard
        imageUrl="https://miro.medium.com/max/645/1*WZmDgcJO40Va5mVgdfbz7g@2x.jpeg"
        title="Pushup"
        desc="A push-up (sometimes called a press-up in British 
            English) is a common calisthenics exercise beginning
            from the prone position. By raising and lowering the
            body using the arms, push-ups exercise the pectoral 
            muscles, triceps, and anterior deltoids."
        sets="3"
        reps="20"
        weight="0">
        </ExerciseCard>
    </Grid>
  );
};

export default Content;