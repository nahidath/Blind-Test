import {Form} from "react-bootstrap";
import themesAPI from "../Themes/themesAPI";
import {useCallback, useEffect, useRef, useState} from "react";
import apiRes from "./apiRes";
import "./Game.css";
// import AudioSpectrum from "react-audio-spectrum/lib/AudioSpectrum";
import { SpectrumVisualizer, SpectrumVisualizerTheme } from 'react-audio-visualizers';
import AudioSpectrum from "react-av";
import {IoMusicalNotes} from "react-icons/io5";


export default function Game(){
    const pathArray = window.location.pathname.split('/');
    const getThemeID = pathArray[2];
    const findThemeID = themesAPI.find(t => t.id === getThemeID);
    // const playlist = apiRes;
    const [track, setTrack] = useState("");
    // const [trackTimer, setTrackTimer] = useState(0);
    let audioEle = new Audio(track);
    const audioTimer = audioEle.duration;
    const [trackTimer, setTrackTimer] = useState(audioEle.currentTime);
    const [trackDuration, setTrackDuration] = useState(30);
    const [playing, setPlaying] = useState(false);
    const [tractTitle, setTractTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [randomNames, setRandomNames] = useState({});



    useEffect(() => {
        // getPlayist();
        getRandomSong();
    }, []);
    useEffect(() => {
      if(playing && trackDuration > 0 ){
          setTimeout(() => setTrackDuration(trackDuration - 1), 1000);
      }
    }, [trackDuration, playing]);


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
        setArtist(apiRes[randomTrackIndex].artist.name);
        setTractTitle(apiRes[randomTrackIndex].title_short);
    }

    const getRandomArtists = () =>{
        const arrayRnd = [];
        const randomNumber = Math.floor(Math.random() * apiRes.length);
        for(let i=0; i<randomNumber; i++){
            arrayRnd.push(apiRes[i].artist.name);
        }
    }

    const noDisplaying = () => {
        setPlaying(true);
        const button = document.getElementById('mainActionContainer');
        button.style.display = 'none';
        const spectrum = document.getElementsByClassName('css-tg9irj');
        spectrum[0].style.visibility = 'visible';

        const timer = document.getElementById('countdownContainer');
        timer.style.visibility = 'visible';
    }


    const mainActionRender = ({ play}) => ({
        id: 'mainActionContainer',
        node: <IoMusicalNotes size={150} color={'#281754'} onClick={play}/>,
    });

    return(
        <div className="game-wrapper">
            <h5>Thème : {findThemeID.name}</h5>
            <div className="timer"></div>
            <div className="player">
                {/*<FaPlayCircle id="player-button" onClick={noDisplaying}/>*/}
                {/*<audio*/}
                {/*    controls*/}
                {/*    // className='userAudio'*/}
                {/*    id="audio-element"*/}
                {/*    // autoPlay={true}*/}
                {/*    src={track}*/}
                {/*>*/}
                {/*</audio>*/}
                {/*<AudioSpectrum*/}
                {/*    id="audio-canvas"*/}
                {/*    height={200}*/}
                {/*    width={300}*/}
                {/*    // audioEle={audioEle}*/}
                {/*    audioId={'audio-element'}*/}
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
                    id="visu"
                    audio={audioEle.src}
                    // autoPlay={true}
                    iconsColor="#26a69a"
                    // backgroundColor="white"
                    // showMainActionIcon
                    mainActionRender={mainActionRender}
                    theme={SpectrumVisualizerTheme.radialSquaredBars}
                    colors={['#7303c0']}
                    highFrequency={8000}
                    barWidth={2}
                    radius={70}
                    numBars={60}

                />
                <div id="mainActionContainer" onClick={noDisplaying}></div>
                <div id="countdownContainer">{trackDuration}</div>
            </div>
            <div className="answer">
                <div className="grid-card-answer">
                    <input type="radio" id="answer" value={tractTitle}/>
                    <label for="answer">{artist}</label>
                    {Array.from({length: 3}).map((_,idx) => (
                        <>
                            <input type="radio" id="answer" value={tractTitle}/>
                            <label htmlFor="answer">{artist}</label>
                        </>

                    ))}
                </div>
                {/*<Form>*/}
                {/*    <Form.Control type="text" placeholder="Your answer" />*/}
                {/*</Form>*/}
                {/*<span>Press enter to submit</span>*/}
            </div>
        </div>
    )
}