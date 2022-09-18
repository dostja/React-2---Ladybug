import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Ladybug from "./components/Ladybug";
import "./style.css";

const STEP_SIZE = 25;

const App = () => {
  
    const [ladybugState, setLadybugState] = useState({
      posX: 100,
      posY: 100,
      orientation: "right",
    });

    console.log(ladybugState);

    const movebug = ({ code }) => {
      console.log(code);
      if (code === "ArrowUp") {
        setLadybugState((position) => ({
          ...position,
          orientation: "up",
          posY: position.posY - STEP_SIZE,
        }));
      } else if (code === "ArrowLeft") {
        setLadybugState((position) => ({
          ...position,
          orientation: "left",
          posX: position.posX - STEP_SIZE,
        }));
      } else if (code === "ArrowRight") {
        setLadybugState((position) => ({
          ...position,
          orientation: "right",
          posX: position.posX + STEP_SIZE,
        }));
      } else if (code === "ArrowDown") {
        setLadybugState((position) => ({
          ...position,
          orientation: "down",
          posY: position.posY + STEP_SIZE,
        }));
      }
    };

    return (
      <div tabIndex={-1} className="field" onKeyDown={movebug}>
        <header>Click anywhere to start the game</header>
        <Ladybug ladybugState={ladybugState} />
      </div>
    );
  
};
createRoot(document.querySelector("#app")).render(<App />);
