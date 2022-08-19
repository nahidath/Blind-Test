
export default function  AudioComponent(srcMusic){

    return(
        <audio controls className='userAudio'>
            <source  type="audio/mp3" src={srcMusic.srcMusic} ></source>
        </audio>

    )
}