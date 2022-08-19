import {createTheme, ThemeProvider} from '@mui/material/styles';
import AudioPlayer from 'material-ui-audio-player';
import { deepPurple, pink } from '@mui/material/colors';

const muiTheme = createTheme({
    palette: {
        type: 'light',
        primary: deepPurple,
        secondary: pink
    }
});
export default function  AudioComponent(){

    // console.log(muiTheme);

    return(
        <ThemeProvider theme={muiTheme}>
            {/*<AudioPlayer src="http://cdn-preview-9.deezer.com/stream/c-99bd12f1f1e14dfb4cdcda123fa5541f-3.mp3" />*/}
        </ThemeProvider>

    )
}