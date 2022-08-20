import {Form} from "react-bootstrap";
import themesAPI from "../Themes/themesAPI";
import {useEffect, useState} from "react";
import apiRes from "./apiRes";
import "./Game.css";
import {FaPlayCircle} from "react-icons/fa";

export default function Game(){
    const pathArray = window.location.pathname.split('/');
    const getThemeID = pathArray[2];
    const findThemeID = themesAPI.find(t => t.id === getThemeID);
    // const playlist = apiRes;
    const [track, setTrack] = useState("");

    useEffect(() => {
        // getPlayist();
        getRandomSong();
    }, []);


    // const getPlayist = () => {
    //     let url = findThemeID.url;
    //     console.log(url);
    //     axios.get(url).then((response) =>{
    //         console.log(response);
    //         setPlaylist(response.data);
    //     }).catch((err) => {
    //         console.log(err);
    //     })
    // }

    const getRandomSong = () => {
        const randomTrackIndex = Math.floor(
            Math.random() * apiRes.length
        );
        console.log(apiRes.length);
        console.log(apiRes[randomTrackIndex].preview)
        setTrack(apiRes[randomTrackIndex].preview);
    }

    // const playerButton = document.querySelector('.player-button');
    // const audio = document.querySelector('audio');


    return(
        <div className="game-wrapper">
            <h5>Theme : {findThemeID.name}</h5>
            <div className="timer"></div>
            <div className="player">
                {/*<FaPlayCircle className="player-button"/>*/}
                <audio controls className='userAudio' >
                    <source  type="audio/mp3" src={track} ></source>
                </audio>
            </div>
            <div className="answer">
                <Form>
                    <Form.Control type="text" placeholder="Your answer" />
                </Form>    
            </div>
        </div>
    )
}