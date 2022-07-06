import * as React from 'react';
import { format } from 'date-fns';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import HabitsList from './HabitsList';

export default function Habits({calendarDate, habits,setHabits}) {
  return(
  <>
    <Typography variant="h5" gutterBottom component="div">
      {format(calendarDate, "eeee, d LLLL yyyy")}
    </Typography>
    <Grid container spacing={2} direction="column">
    <HabitsList type="morning" calendarDate={calendarDate} habits={habits} setHabits={setHabits}/>
      <HabitsList type="afternoon" calendarDate={calendarDate} habits={habits} setHabits={setHabits}/>
      <HabitsList type="evening" calendarDate={calendarDate} habits={habits} setHabits={setHabits}/>
    </Grid>
  </>
  )
}
