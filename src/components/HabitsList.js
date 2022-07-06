import * as React from 'react';
import axios from "axios";
import * as qs from 'qs'
import { format } from 'date-fns';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Checkbox from '@mui/material/Checkbox';

export default function Habits({type, calendarDate}) {
  
  const hb2=[
    {id:"1",name:"Correr",completed:true, type:"morning",calendarDate:"2022-07-06"},
    {id:"2",name:"Estudiar inglés",completed:false, type :"afternoon",calendarDate:"2022-07-05"},
    {id:"3",name:"Estudiar francés",completed:false, type :"evening",calendarDate:"2022-07-06"}
  ];
  const [habits, setHabits] = React.useState(hb2);

  React.useEffect(() => {
    completeHabit
  }, [])

  const arrayObjUpdater = (habitId) => {
    let hb3=habits;
    hb3.map((habit)=>{
      if (habit.id==habitId){
        habit.completed= !habit.completed
      }
    });

   
    console.log(hb3); // See output below
    setHabits(hb3)
    
  }
  
  
  const fetchData = () => {
    // axios.get(`http://localhost:1337/api/get-habits-with-logs?calendarDate=${format(calendarDate, "yyyy-MM-dd")}&type=${type}`)
    // .then((response) =>{
    //   setHabits(response.data)
    // })
    // .catch((error) => console.log(error))
  }
 var cont=1;

  function completeHabit (habitId,setValue) {
    console.log("HOLA");
    hb2.map((habit)=>{
      if (habit.id===habitId){
        
        console.log("HOLA2222222222222222222222222222222222222");
        habit.completed = !habit.completed
        setValue(habit.completed);
        
        
        console.log(habit.completed);
      };
    });
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
    console.log(hb2);
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
            <ListItemButton role={undefined} onClick={()=>arrayObjUpdater (id)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={completed}
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
