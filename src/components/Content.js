import React from "react";
import Grid from '@mui/material/Grid'
import ExerciseCard from "./ExerciseCard";

const Content = () => {
  const getExerciseCard = ExerciseCard => {
    return (
      <Grid item xs={12} sm={4}>
        <ExerciseCard></ExerciseCard>
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      <ExerciseCard></ExerciseCard>
      <ExerciseCard></ExerciseCard>
      <ExerciseCard></ExerciseCard>
      <ExerciseCard></ExerciseCard>
    </Grid>
  );
};

export default Content;