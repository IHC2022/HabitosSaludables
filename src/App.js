import * as React from 'react';
import {Route,Routes,useNavigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';

import Habits from './Habits';
import CreateHabitForm from './CreateHabitForm';
import Calendar from './Calendar';


//import { recognition } from "./api/VoiceRecognition";
import { ContactSupportOutlined } from "@material-ui/icons";

  //function App() {
  const App=()=>{
  let [calendarDate, setCalendarDate] = React.useState(new Date());

  return (
    /*<Container maxWidth="md" style={{ paddingTop: '20px'}}>
    //  {/* Main Container *///}
    /*  <Grid container spacing={2} direction="column">
        {/* Form + Calendar*///}
    /*    <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h4" component="div" gutterBottom>
              Habit Picker project
            </Typography>
            <Typography variant="body1" gutterBottom>
              Form
            </Typography>
            { /* Form to add habits */// }
    /*        <CreateHabitForm />
          </Grid>
          { /* Calendar */// }
    /*       <Calendar calendarDate={calendarDate} setCalendarDate={setCalendarDate} />
        </Grid>
        {/* Habits Table *///}
    /*    <Habits calendarDate={calendarDate} />
      </Grid>
    </Container>*/
    <div className="App">
      <Navbar />
      <Routes>
        <Route  path="/" element={
            //<Typography variant="body1" gutterBottom>
            //  Form
            //</Typography>
            <h1 className="text-center py-4">this is home page</h1>}
          />
        <Route  path="nuevos/*" element={
        //<h1 className="text-center py-4">this is tutorials page</h1>
        <CreateHabitForm />
      }/>
        <Route  path="calendario/*" element={
        //<h1 className="text-center py-4">this is calendar page</h1>
        <Calendar calendarDate={calendarDate} setCalendarDate={setCalendarDate} />
        }/>
        <Route  path="habitos/*" element={
        //<h1 className="text-center py-4">this is contact page</h1>
        <Habits calendarDate={calendarDate} />
        }/>
      </Routes>
    </div>
  );
};
export default App;