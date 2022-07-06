import * as React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Habits from './views/Habits';
import CreateHabitForm from './views/CreateHabitForm';
import Calendar from './views/Calendar';
import Navbar from './views/Navbar';


import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(

  <Router>


    <Navbar />
    <Routes>
      <Route path="/" element={<App />}>
      <Route path="nuevos/*" element={<CreateHabitForm />} />
      <Route path="calendario/*" element={<Calendar />} />
      <Route path="habitos/*" element={<Habits />} />
      </Route>
      
    </Routes>

  </Router>
);//cambios
