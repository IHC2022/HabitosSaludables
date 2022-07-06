import * as React from 'react';
import { Outlet, Link } from "react-router-dom";

// import './App.css'






const App = () => {
  let [calendarDate, setCalendarDate] = React.useState(new Date());

  return (

    <div className="App">
    <h1>Bookkeeper</h1>
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <Link to="/">Inicio</Link> |{" "}
      <Link to="/nuevos">Nuevos Habitos</Link>|{" "}
      <Link to="/calendario">Calendario</Link>|{" "}
      <Link to="/habitos">Habitos</Link>
    </nav>
    <Outlet />
  </div>
  );
};
export default App;