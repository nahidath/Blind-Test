import {Form} from "react-bootstrap";
import themesAPI from "../Themes/themesAPI";
import {useEffect, useRef, useState} from "react";
import apiRes from "./apiRes";
import "./Game.css";
import {Wave} from "@foobar404/wave";
import { SpectrumVisualizer, SpectrumVisualizerTheme } from 'react-audio-visualizers';

export default function Game(){
    const pathArray = window.location.pathname.split('/');
    const getThemeID = pathArray[2];
    const findThemeID = themesAPI.find(t => t.id === getThemeID);
    // const playlist = apiRes;
    const [track, setTrack] = useState("");
    let canvasRef = useRef(null);
    // let audioElement = document.getElementById("source");
    // let audioCtx = new AudioContext();
    // let analyser = audioCtx.createAnalyser();
    // analyser.fftSize = 2048;
    // let source = audioCtx.createMediaElementSource(audioElement);
    // source.connect(audioCtx.destination);
    // let data = new Uint8Array(analyser.frequencyBinCount);
    let ctx;
    let canvas;
    // let wave;

    useEffect(() => {
        // getPlayist();
        getRandomSong();
        // let audioElement = document.getElementById("source");
        // let canvasElement = document.getElementById("audioVisual");
        // let wave = new Wave(audioElement, canvasElement);
        // wave.addAnimation(new wave.animations.Wave({
        //     lineWidth: 10,
        //     lineColor: "red",
        //     count: 20
        // }));
    }, []);



   //  const draw = (data) =>{
   //      data = [...data];
   //      ctx.clearRect(0,0,canvas.width,canvas.height);
   //      let space = canvas.width / data.length;
   //      data.forEach((value,i)=>{
   //          ctx.beginPath();
   //          ctx.moveTo(space*i,canvas.height); //x,y
   //          ctx.lineTo(space*i,canvas.height-value); //x,y
   //          ctx.stroke();
   //      })
   //  }
   // const loopingFunction = () =>{
   //      requestAnimationFrame(loopingFunction);
   //      analyser.getByteFrequencyData(data);
   //      draw(data);
   //  }
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
                {/*    id="source"*/}
                {/*    autoPlay={true}*/}
                {/*    src={track}*/}
                {/*>*/}
                {/*    /!*<source  type="audio/mp3" src={track} ></source>*!/*/}
                {/*</audio>*/}
                {/*<canvas id="audioVisual" height="500" width="500"></canvas>*/}
                <SpectrumVisualizer
                    audio={track}
                    theme={SpectrumVisualizerTheme.roundBars}
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