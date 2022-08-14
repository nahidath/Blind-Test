import { BsFillPlayCircleFill } from "react-icons/bs";
import {Button} from "react-bootstrap";
import {usenavigate, useNavigate} from "react-router-dom";
import "./Homepage.css";


export default function Homepage(){
    const navigate = useNavigate();

    const goToThemes = () => {
        navigate("/themes", {replace: true});
    }

    return(
        <div className="home">
            {/*<div className="logo">*/}
            {/*    <img src="/logo.png" alt="Logo" />*/}
            {/*</div>*/}
            <div className="gameTitle">
                Blind Test, le game le plus fun  de toutes les soirées
            </div>
            <BsFillPlayCircleFill size={120} onClick={goToThemes} className="playGame"/>
            <h4 className="start-msg">Let's start !!</h4>
        </div>
    )

}