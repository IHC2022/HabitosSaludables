import * as React from 'react';
import axios from "axios";
import * as qs from 'qs'
import { format, getDate } from 'date-fns';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Checkbox from '@mui/material/Checkbox';
import {addHabitos, getHabitos,modHabitos} from './data'
export default function Habits({type, calendarDate, habits, setHabits}) {
  const [value,setValue] = React.useState(false)
  
  // const hb2=[
  //   {id:"1",name:"Correr",completed:true, type:"morning",calendarDate:"2022-07-06"},
  //   {id:"2",name:"Estudiar inglés",completed:false, type :"afternoon",calendarDate:"2022-07-05"},
  //   {id:"3",name:"Estudiar francés",completed:false, type :"evening",calendarDate:"2022-07-06"}
  // ];
  // const [habits, setHabits] = React.useState([]);

  React.useEffect(() => {
    fetchData();
  }, [calendarDate])

  
  
  
  
  const fetchData = () => {
    let temp = getHabitos();
    // axios.get(`http://localhost:1337/api/get-habits-with-logs?calendarDate=${format(calendarDate, "yyyy-MM-dd")}&type=${type}`)
    // .then((response) =>{
      setHabits(temp)
    console.log("ENRE")
    // })
    // .catch((error) => console.log(error))
  }


  const  completeHabit= (habitId)=>()=> {
  //  modHabitos(habitId)
    habits[parseInt(habitId)-1].completed= !habits[parseInt(habitId)-1].completed;
    setValue(habits[parseInt(habitId)-1].completed)
    console.log("ADIOS")
    console.log(parseInt(habitId))
    setHabits(habits)
    // modHabitos(habits)
    fetchData()
    console.log(value)
    
    // axios
    //   .post('http://localhost:1337/api/habit-logs', {
    //     data: {
    //       habit: habitId,
    //       completionDate: calendarDate
    //     }
    //   })
    //   .then((response) => {
    //     fetchData()
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    
  };
 
  
  return(
    <Grid item>
    {/*  Title of the section aka Morning routine */}
      <Typography variant="h6" gutterBottom component="div">
        {type.replace(/^\w/, (c) => c.toUpperCase())} routine
      </Typography>
      {/* Whole list */}
      <List sx={{ width: '100%' }}>
      {habits.length > 0 && habits.map((habit) => {
        const { id, name, completed } = habit
        console.log("HOLA3");
        
        console.log(completed);
        console.log("HOLA5");
        if (habit.type==type &&habit.calendarDate==format(calendarDate, "yyyy-MM-dd") ){
          
        
        const labelId = `checkbox-list-label-${id}`;
        return (
          <ListItem
            key={id}
            disablePadding
          >
            <ListItemButton role={undefined} onClick={completeHabit(id)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={value}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={name} />
            </ListItemButton>
          </ListItem>
        );}
      })}
    </List>
    </Grid>
  )
}
