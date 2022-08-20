import "./AudioPlayer.css";


export default function  AudioPlayer(srcMusic){

    return(
        <audio controls className='userAudio'>
            <source  type="audio/mp3" src={srcMusic.srcMusic} ></source>
        </audio>

    )
}