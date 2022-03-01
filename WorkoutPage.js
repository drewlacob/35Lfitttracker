import React from 'react'
import ExerciseCard from '../components/ExerciseCard.js'
import Content from '../components/Content.js'
import Grid from '@mui/material/Grid'
import Navbar from '../components/NavBar.js'

function WorkoutPage() {
    return (
        <Grid container direction="column">
        <Grid item>
          <Navbar></Navbar>
        </Grid>
        <p></p>
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
