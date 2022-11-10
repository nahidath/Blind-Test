import {Form} from "react-bootstrap";
import themesAPI from "../Themes/themesAPI";
import {useCallback, useEffect, useRef, useState} from "react";
import apiRes from "./apiRes";
import "./Game.css";
// import AudioSpectrum from "react-audio-spectrum/lib/AudioSpectrum";
import { SpectrumVisualizer, SpectrumVisualizerTheme } from 'react-audio-visualizers';
import AudioSpectrum from "react-av";
import {IoMusicalNotes} from "react-icons/io5";
import SpectrumVisu from "../component/SpectrumVisualizer/SpectrumVisu";


export default function Game(){
    const pathArray = window.location.pathname.split('/');
    const getThemeID = pathArray[2];
    const findThemeID = themesAPI.find(t => t.id === getThemeID);
    const [track, setTrack] = useState("");
    const [trackDuration, setTrackDuration] = useState(30);
    const [playing, setPlaying] = useState(false);
    const [tractTitle, setTractTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [randomNames, setRandomNames] = useState([]);
    const [answer, setAnswer] = useState("");
    const [score, setScore] = useState(0);
    const [started, setStarted] = useState(false);




    useEffect(() => {
        // getPlayist();
        getRandomSong();
        getRandomArtists();
    }, []);
    useEffect(() => {
      if(playing && trackDuration > 0 ){
          setTimeout(() => setTrackDuration(trackDuration - 1), 1000);
      }
    }, [trackDuration, playing]);

    useEffect(() => {
        if(playing){
            const spectrum = document.getElementsByClassName('css-tg9irj');
            spectrum[0].style.visibility = 'visible';
            const buttonPlay =  document.getElementById('mainActionContainer');
            buttonPlay.click();
            console.log('click');
        }
    }, [ playing]);


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
        console.log(track);
        setArtist(apiRes[randomTrackIndex].artist.name);
        setTractTitle(apiRes[randomTrackIndex].title_short);
    }


    const getRandomArtists = () =>{
        const arrayRnd = [...randomNames];
        while (arrayRnd.length < 3){
            const randomNumber = Math.floor(Math.random() * apiRes.length);
            if(!arrayRnd.includes(apiRes[randomNumber].artist.name) && apiRes[randomNumber].artist.name!=artist){
                arrayRnd.push(apiRes[randomNumber].artist.name);
            }
        }
        setRandomNames(arrayRnd);

    }

    const noDisplaying = () => {
        setPlaying(true);
        // setStarted(true);
        // const button = document.getElementById('mainActionContainer');
        // button.style.display = 'none';
        // const spectrum = document.getElementsByClassName('css-tg9irj');
        // spectrum[0].style.visibility = 'visible';

        const timer = document.getElementById('countdownContainer');
        timer.style.visibility = 'visible';
    }


    const subAnswer = () => {
        if(answer == artist){
            setPlaying(false);
            const audio = document.getElementsByClassName("audio-visu");
            audio.style.display='none';
            setScore(score+1);
            getRandomSong();

        }
    }

    const mainActionRender = ({ play, pause}) => ({
        id: 'mainActionContainer',
        node: <IoMusicalNotes size={150} color={'#281754'} onClick={play}/>,
    });
    // const gameStart = () => {
    //     return (
    //         <SpectrumVisualizer
    //             id="visu"
    //             audio={track}
    //             iconsColor="#26a69a"
    //             mainActionRender={mainActionRender}
    //             theme={SpectrumVisualizerTheme.radialSquaredBars}
    //             colors={['#7303c0']}
    //             highFrequency={8000}
    //             barWidth={2}
    //             radius={70}
    //             numBars={60}
    //             onChange={(e) => console.log(e)}
    //         />
    //     )
    // }

    return(
        <div className="game-wrapper">
            <h5>Thème : {findThemeID.name}</h5>
            <div className="timer"></div>
            <div className="player">
                {/*{(started) ? <><SpectrumVisu trackSCR={track}/></>:<div id="mainActionContainer" onClick={noDisplaying}></div> }*/}
                {
                    (playing) ?
                        <SpectrumVisualizer
                            id="visu"
                            audio={track}
                            iconsColor="#26a69a"
                            mainActionRender={mainActionRender}
                            theme={SpectrumVisualizerTheme.radialSquaredBars}
                            colors={['#7303c0']}
                            highFrequency={8000}
                            barWidth={2}
                            radius={70}
                            numBars={60}
                            onChange={(e) => console.log(e)}
                        /> :  <></>
                        // <div id="mainActionContainer" onClick={noDisplaying}/>
                }

                <div id="mainActionContainer" onClick={noDisplaying}/>
                <div id="countdownContainer">{trackDuration}</div>
                <div id="score">Score :<br/>{score}</div>
            </div>
            <div className="answer">
                <div className="grid-card-answer">
                    <input type="radio" id="answer" value={artist} onChange={(e) => setAnswer(e.target.value)}/>
                    <label htmlFor="answer">{artist}</label>
                    {randomNames.map((val, idx) => (
                        <>
                            <input type="radio" id="answer" key={idx} value={val} onChange={(e) => setAnswer(e.target.value)}/>
                            <label htmlFor="answer">{val}</label>
                        </>

                    ))}
                </div>
                <button type="submit" className="btn-answer" onClick={subAnswer}>Valider</button>

                {/*<Form>*/}
                {/*    <Form.Control type="text" placeholder="Your answer" />*/}
                {/*</Form>*/}
                {/*<span>Press enter to submit</span>*/}
            </div>
        </div>
    )
}