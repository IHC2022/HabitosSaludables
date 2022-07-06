import * as React from 'react';
import { Outlet, Link } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Habits from './views/Habits';
import CreateHabitForm from './views/CreateHabitForm';
import Calendar from './views/Calendar';
import Navbar from './views/Navbar';
import Tabs from './views/Tabs';

// import './App.css'






const App = () => {
  let [calendarDate, setCalendarDate] = React.useState(new Date());

  return (
    

  

    

    <Router> 
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="nuevos" element={<CreateHabitForm />} />
      <Route path="calendario" element={<Calendar calendarDate={calendarDate} setCalendarDate={setCalendarDate}/>} />
      <Route path="habitos" element={<Habits calendarDate={calendarDate}/>} />

    </Routes>

    </Router> 
  );
};
export default App;