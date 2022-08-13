import "./NavBar.css";
import {Navbar} from "react-bootstrap";


export default function NavBar(){
    return(
        <Navbar expand="lg">
            <Navbar.Brand className="text-primary">
                <img
                    alt="BlindTestLogo"
                    src="/logo.png"
                    width="100"
                    height="100"
                    className="navbar-logo"
                />
            </Navbar.Brand>
        </Navbar>
    )
}