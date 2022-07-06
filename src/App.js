import * as React from 'react';
import { Outlet, Link } from "react-router-dom";
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useNavigate } from 'react-router-dom';
import { recognition } from "./api/VoiceRecognition";
import Habits from './views/Habits';
import CreateHabitForm from './views/CreateHabitForm';
import Calendar from './views/Calendar';
import Navbar from './views/Navbar';
import Tabs from './views/Tabs';


const App = () => {
  let [calendarDate, setCalendarDate] = React.useState(new Date());
  let navigate = new useNavigate();
  //console.log(recognition); f12 onnend
  
    //recognition.start();

    recognition.onresult = (event)=>{
      //console.log(event);
      const command = event.results[0][0].transcript; //usamos console logp para ver transcript
      //console.log(command);
      if (command.includes("dirigir a")||command.includes("ir a")) {
        //console.log(command);
        if (command.includes("inicio")|| command.includes("index")) {
          navigate("/");
        
        }else if(
            command.includes("nuevo")||
            command.includes("nuevos")
          ){
            navigate("/nuevos");
        }
        else if(command.includes("calendario")||command.includes("calendarios")) {
          navigate("/calendario");
        }else if(
          command.includes("lista")||
          command.includes("listas")
        ){
          navigate("/lista");
        }
      }
    };
  
    recognition.onend = ()=>{
      recognition.start();
    };

  return (
    <div className="App">
      
      <Navbar/>
      <Routes>
        <Route exact activeClassName="current" path="/" element={<App />} />
        <Route exact activeClassName="current" path="nuevos" element={<CreateHabitForm />} />
        <Route exact activeClassName="current" path="calendario" element={<Calendar calendarDate={calendarDate} setCalendarDate={setCalendarDate}/>} />
        <Route exact activeClassName="current" path="lista" element={<Habits calendarDate={calendarDate}/>} />

      </Routes>

       
    </div>
  );
};
export default App;