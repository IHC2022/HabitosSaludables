import React from "react";
import { makeStyles} from '@material-ui/core';
import {
    useSpeechRecognition,
  } from "react-speech-recognition";
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  text: {
    marginRight: "length",
  },
}));


function Texto() {

  const classes = useStyles();
    
    const navigate = useNavigate();
    const navegar = (url) => {
      if (url.includes("hábito")) {
        navigate("add-habit")
        return
      }

        navigate(url)
        console.log(url)
    }
    const commands = [
        {
          command: ["Ir a *", "Abrir *", "Crear *"],
          callback: (redirectPage) => navegar(redirectPage),
                },
          
    ];

    const { transcript } = useSpeechRecognition({ commands });

  return (
    <div>
    <p className={classes.text} id="Comando voz">Comando : {transcript}</p>
    </div>
  );
}

export { Texto };