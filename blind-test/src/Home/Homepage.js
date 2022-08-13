import { BsFillPlayCircleFill } from "react-icons/bs";
import {Button} from "react-bootstrap";
import {useHistory, useNavigate} from "react-router-dom";


export default function Homepage(){
    const history = useNavigate();

    const goToThemes = () => {
        history.push({ pathname:'/themes'});
    }

    return(
        <div className="home">
            <div className="gameTitle">
                Blind Test
            </div>
            <Button onClick={goToThemes}><BsFillPlayCircleFill className="playGame"/></Button>
            <h6>Let's start !!</h6>
        </div>
    )

}