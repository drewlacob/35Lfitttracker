import React from 'react'
import ExerciseCard from '../components/ExerciseCard.js'
import Content from '../components/Content.js'
import Grid from '@mui/material/Grid'

function WorkoutPage() {
    return (
        <Grid container direction="column">
        <Grid item>
          <h1>Put Nav bar here</h1>
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            <Content/>
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    )
}

export default WorkoutPage
