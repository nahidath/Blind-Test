import './App.css';
import Homepage from "./Home/Homepage";
import Themes from "./Themes/Themes";
import Game from "./Game/Game";
import EndGame from "./EndGame/EndGame";
import {Route, Router, Routes, useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";
import {VscDebugRestart} from "react-icons/vsc";
import AudioPlayer from "./component/AudioPlayer/AudioPlayer";




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
        </Routes>
      </div>
      <div className="restart">
        <Button onClick={goToHomePage}><VscDebugRestart/> Restart</Button>
      </div>
    </>
  );
}

export default App;
