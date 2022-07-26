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
    <IconButton className={classes.menuButton} color="inherit" onClick={SpeechRecognition.startListening}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-mic-fill" viewBox="0 0 16 16">
  <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"/>
  <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>
</svg></IconButton>
    </div>
  );
}

export { Voice };