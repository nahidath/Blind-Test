import themesAPI from "./themesAPI";
import "./Themes.css";
import {Col, Row, Card } from "react-bootstrap";


export default function Themes (){


    return(
        <div className="theme-wrapper">
            <div className="title">
                Choose a theme :
            </div>
            <div className="theme-card">
                    {themesAPI.map((elt, index) => (
                        <Row key={index} xs={1} md={2} className="g-4">
                            <Col xs={1} md={4}>
                                <Card
                                    key={elt.id}
                                    // onClick={this.handleThemeClick.bind(null, id)}
                                >
                                    <Card.Body>
                                        <span
                                            dangerouslySetInnerHTML={{ __html: elt.icon }}
                                        />
                                    </Card.Body>
                                    <Card.Footer>{elt.id}</Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    ))}
            </div>
        </div>
    )
}