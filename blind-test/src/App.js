import './App.css';
import Homepage from "./Home/Homepage";
import Themes from "./Themes/Themes";
import Game from "./Game/Game";
import EndGame from "./EndGame/EndGame";
import {Route, Router, Routes, useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import {VscDebugRestart} from "react-icons/vsc";
import AudioComponent from "./component/AudioPlayer/AudioComponent";




function App() {

    const navigate = useNavigate();

    const goToHomePage = () => {
        navigate("/", {replace: true});
    }

  return (
    <>
      <div className="logo">
          <img src="/logo.png" alt="Logo" />
      </div>
      <div className="App">
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path="/themes" element={<Themes/>} exact />
          <Route path="/themes/:themeId" element={<Game/>} />
          <Route path="/end" element={<EndGame/>} />
          <Route path="/audio" element={<AudioComponent/>} />
        </Routes>
      </div>
      <div className="restart">
        <Button onClick={goToHomePage}><VscDebugRestart/> Restart</Button>
      </div>
    </>
  );
}

export default App;
