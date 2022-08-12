import { BsFillPlayCircleFill } from "react-icons/bs";


export default function Homepage(){

    return(
        <div className="home">
            <div className="gameTitle">
                Blind Test
            </div>
            <BsFillPlayCircleFill className="playGame"/>
            <h6>Let's start !!</h6>
        </div>
    )

}