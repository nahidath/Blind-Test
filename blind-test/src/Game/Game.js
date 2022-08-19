import {Form} from "react-bootstrap";
import themesAPI from "../Themes/themesAPI";
import AudioComponent from "../component/AudioPlayer/AudioComponent";
import {useEffect, useState} from "react";
import axios from "axios";
import apiRes from "./apiRes";
import AudioCmp from "../component/AudioPlayer/AudioComponent";


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

    // http://cdn-preview-9.deezer.com/stream/c-99bd12f1f1e14dfb4cdcda123fa5541f-3.mp3

    return(
        <div className="game-wrapper">
            <h5>Theme : {findThemeID.name}</h5>
            <div className="timer"></div>
            <div className="player">
                {/*<AudioCmp/>*/}
            </div>
            <div className="answer">
                <Form>
                    <Form.Control type="text" placeholder="Your answer" />
                </Form>    
            </div>
        </div>
    )
}