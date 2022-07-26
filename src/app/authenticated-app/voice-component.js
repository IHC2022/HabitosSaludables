import React from "react";
import { IconButton, makeStyles } from '@material-ui/core';
import SpeechRecognition, {
    useSpeechRecognition,
  } from "react-speech-recognition";
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  text: {
    marginRight: 'auto',
  },
  menuButton: {
    // Push other menu elements to the right
    marginRight: 'auto',
    
  },
}));


function Voice() {

  const classes = useStyles();
    
    const navigate = useNavigate();
    const navegar = (url) => {
      if (url.includes("hábito")) {
        navigate("add-habit")
        return
      }

      if (url.includes("tablero")) {
        navigate("dashboard")
        return
      }

      if (url.includes("lista")) {
        navigate("manage-habits")
        return
      }

      if (url.includes("configuración")) {
        navigate("settings")
        return
      }

        navigate(url)
        console.log(url)
    }
    
    const commands = [
        {
          command: ["Ir a *", "Abrir *", "Crear *", "Agregar *","Ir a mis *","Abrir mis *"],
          callback: (redirectPage) => navegar(redirectPage),
                },
          
    ];

    const { transcript } = useSpeechRecognition({ commands });
    console.log(transcript)

  return (
    <div>
    <IconButton className={classes.menuButton} color="inherit" onClick={SpeechRecognition.startListening}>voz</IconButton>
    </div>
  );
}

export { Voice };