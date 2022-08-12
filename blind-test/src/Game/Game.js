import {Form} from "react-bootstrap";


export default function Game(){

    return(
        <div className="game-wrapper">
            <h5>Theme :</h5>
            <div className="timer"></div>
            <div className="player"></div>
            <div className="answer">
                <Form>
                    <Form.Control type="text" placeholder="Your answer" />
                </Form>    
            </div>
        </div>
    )
}