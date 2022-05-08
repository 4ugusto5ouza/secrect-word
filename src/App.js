// react
import { useCallback, useEffect, useState } from "react";

// styles
import "./App.css";

//components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import EndScreen from "./components/EndScreen";

// data
import { wordsList } from "./data/words";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

const App = () => {
  const [gameStage, setGameStage] = useState(stages[0].id);
  return (
    <div className="App">
      {gameStage === stages[0].id && <StartScreen />}
      {gameStage === stages[1].id && <Game />}
      {gameStage === stages[2].id && <EndScreen />}
    </div>
  );
};

export default App;
