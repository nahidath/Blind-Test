import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';

const muiTheme = createMuiTheme({});


export default function  AudioPlayer(music){


    return(
        <ThemeProvider theme={muiTheme}>
            <AudioPlayer src=music />
        </ThemeProvider>
    )
}