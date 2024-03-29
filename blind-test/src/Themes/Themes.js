import themesAPI from "./themesAPI";
import "./Themes.css";
import {Col, Row, Card } from "react-bootstrap";
import {useNavigate} from "react-router-dom";


export default function Themes (){

    const navigate = useNavigate();

    const handleThemeClick = (themeId) => {
        navigate("/themes/"+ themeId, {replace: true});
    }

    return(
        <div className="theme-wrapper">
            <h3 className="title">
                Choose a theme :
            </h3>
            <div className="theme-card">
                    {themesAPI.map((elt, index) => (
                        <Row key={index} xs={1} md={2} className="g-4">
                            <Col xs={1} md={4}>
                                <Card
                                    key={elt.id}
                                    onClick={() => handleThemeClick(elt.id)}
                                    className="card-theme"
                                >
                                    <Card.Img variant="top" src={elt.icon} />
                                </Card>
                                <h6 className="theme-title">{elt.name}</h6>
                            </Col>
                        </Row>
                    ))}
            </div>
        </div>
    )
}