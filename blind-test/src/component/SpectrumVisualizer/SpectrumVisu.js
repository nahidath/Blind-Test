import {SpectrumVisualizer, SpectrumVisualizerTheme} from "react-audio-visualizers";
import {IoMusicalNotes} from "react-icons/io5";


export default function SpectrumVisu(trackSCR){

    const mainActionRender = ({ play}) => ({
        id: 'mainActionContainer',
        node: <IoMusicalNotes size={150} color={'#281754'} onClick={play}/>,
    });


    return(
        <SpectrumVisualizer
            id="visu"
            audio={trackSCR}
            iconsColor="#26a69a"
            mainActionRender={mainActionRender}
            theme={SpectrumVisualizerTheme.radialSquaredBars}
            colors={['#7303c0']}
            highFrequency={8000}
            barWidth={2}
            radius={70}
            numBars={60}
            onChange={(e) => console.log(e)}
        />
    )
}