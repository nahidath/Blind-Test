import Card from 'react-bootstrap/Card';
import themesAPI from "./themesAPI";


export default function Themes (){

    const handleThemeClick = (themeId) => {
        this.props.history.push(this.props.location.pathname + '/' + themeId);
    }

    return(
        <div className="theme-wrapper">
            <div className="title">
                Choose a theme :
            </div>
            <div className="theme-card">
                {themesAPI.map(({ name, id, icon }) => (
                    <Card
                        key={id}
                        bg="light"
                        border="primary"
                        onClick={this.handleThemeClick.bind(null, id)}
                    >
                        <Card.Body className="theme-display text-center">
                            <span
                                className="theme-icon"
                                dangerouslySetInnerHTML={{ __html: icon }}
                            />
                        </Card.Body>
                        <Card.Footer className="text-center">id</Card.Footer>
                    </Card>
                ))}
            </div>
        </div>
    )
}