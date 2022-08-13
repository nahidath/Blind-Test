import { BsFillPlayCircleFill } from "react-icons/bs";
import {Button} from "react-bootstrap";
import {usenavigate, useNavigate} from "react-router-dom";


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
                Blind Test
            </div>
            <Button onClick={goToThemes}><BsFillPlayCircleFill className="playGame"/></Button>
            <h5>Let's start !!</h5>
        </div>
    )

}