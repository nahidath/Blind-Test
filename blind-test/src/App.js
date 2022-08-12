import './App.css';
import Homepage from "./Home/Homepage";
import Themes from "./Themes/Themes";
import Game from "./Game/Game";
import EndGame from "./EndGame/EndGame";
import {Route, Router, Switch} from "react-router-dom";

function App() {
  return (
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
  );
}

export default App;
