import './App.css';
import Homepage from "./Home/Homepage";
import Themes from "./Themes/Themes";
import Game from "./Game/Game";
import EndGame from "./EndGame/EndGame";
import {Route, Router, Switch, useHistory} from "react-router-dom";
import {Button} from "react-bootstrap";
import {VscDebugRestart} from "react-icons/vsc";




function App() {
  const history = useHistory();

  const goToHomePage = () => {
    history.push({pathname : '/'})
  }

  return (
    <>
    <div className="App">
      <Router basename="/BlindTest">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/themes" component={Themes} exact />
          <Route path="/themes/:themeId" component={Game} />
          <Route path="/end" component={EndGame} />
        </Switch>
      </Router>
    </div>
    <div className="restart">
      <Button onClick={goToHomePage}><VscDebugRestart/> Restart</Button>
    </div>

    </>
  );
}

export default App;
