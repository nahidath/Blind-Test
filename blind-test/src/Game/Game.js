import {Form} from "react-bootstrap";
import themesAPI from "../Themes/themesAPI";
import {useEffect, useRef, useState} from "react";
import apiRes from "./apiRes";
import "./Game.css";
// import AudioSpectrum from "react-audio-spectrum/lib/AudioSpectrum";
import { SpectrumVisualizer, SpectrumVisualizerTheme } from 'react-audio-visualizers';


export default function Game(){
    const pathArray = window.location.pathname.split('/');
    const getThemeID = pathArray[2];
    const findThemeID = themesAPI.find(t => t.id === getThemeID);
    // const playlist = apiRes;
    const [track, setTrack] = useState("");
    let audioEle = new Audio(track);


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
                {/*<audio*/}
                {/*    controls*/}
                {/*    // className='userAudio'*/}
                {/*    id="audio-element"*/}
                {/*    autoPlay={true}*/}
                {/*    src={track}*/}
                {/*>*/}
                {/*</audio>*/}
                {/*<AudioSpectrum*/}
                {/*    id="audio-canvas"*/}
                {/*    height={200}*/}
                {/*    width={300}*/}
                {/*    audioEle={audioEle}*/}
                {/*    // audioId={'audio-element'}*/}
                {/*    capColor={'red'}*/}
                {/*    capHeight={2}*/}
                {/*    meterWidth={2}*/}
                {/*    meterCount={512}*/}
                {/*    meterColor={[*/}
                {/*        {stop: 0, color: '#f00'},*/}
                {/*        {stop: 0.5, color: '#0CD7FD'},*/}
                {/*        {stop: 1, color: 'red'}*/}
                {/*    ]}*/}
                {/*    gap={4}*/}
                {/*/>*/}
                {/*<canvas id="audioVisual" height="500" width="500"></canvas>*/}
                <SpectrumVisualizer
                    audio={track}
                    autoPlay={true}
                    theme={SpectrumVisualizerTheme.squaredBars}
                    colors={['#7303c0']}
                    highFrequency={8000}
                    barWidth={8}
                />
            </div>
            <div className="answer">
                <Form>
                    <Form.Control type="text" placeholder="Your answer" />
                </Form>
                <span>Press enter to submit</span>
            </div>
        </div>
    )
}