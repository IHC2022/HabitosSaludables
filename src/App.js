import React, { useEffect } from  "react";
import {Route,Routes,useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { recognition } from "./api/VoiceRecognition";
import { ContactSupportOutlined } from "@material-ui/icons";
const App= ()=> {
  let navigate = new useNavigate();
  //console.log(recognition); f12 onnend
  
    recognition.start();

    recognition.onresult = (event)=>{
      //console.log(event);
      const command = event.results[0][0].transcript; //usamos console logp para ver transcript
      //console.log(command);
      if (command.includes("dirigir a")||command.includes("ir a")) {
        //console.log(command);
        if (command.includes("home")|| command.includes("index")) {
          navigate("/");
        
        }else if(
            command.includes("tutorials")||
            command.includes("tutorial")
          ){
            navigate("/tutorials");
        }
        else if(command.includes("about")||command.includes("about us")) {
          navigate("/about");
        }else if(
          command.includes("contact")||
          command.includes("contact us")
        ){
          navigate("/contact");
        }
      }
    };
  
    recognition.onend = ()=>{
      recognition.start();
    };
  
    
    
    
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route  path="/" element={
        <h1 className="text-center py-4">this is home page</h1>}/>
        <Route  path="tutorials/*" element={
        <h1 className="text-center py-4">this is tutorials page</h1>}/>
        <Route  path="about/*" element={
        <h1 className="text-center py-4">this is about page</h1>}/>
        <Route  path="contact/*" element={
        <h1 className="text-center py-4">this is contact page</h1>}/>
      </Routes>
    </div>
  );
};

export default App;
