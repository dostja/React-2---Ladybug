import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Ladybug from "./components/Ladybug";
import "./style.css";

const STEP_SIZE = 25;

const App = () => {


  const ladybugState = (code) => {
    const [position, setPosition] = useState({
      posX: 100,
      posY: 100,
      orientation: "right",
    });

    const movebug = () => {
      if (code === "ArrowUp") {
        setPosition({ ...position, posX: position.posX - STEP_SIZE });
      } else {
        setPosition({ ...position, posX: position.posX + STEP_SIZE });
      }
      if (code === "ArrowDown") {
        setPosition({ ...position, posX: position.posX + STEP_SIZE });
      } else {
        setPosition({ ...position, posX: position.posX - STEP_SIZE });
      }
      if (code === "ArrowLeft") {
        setPosition({ ...position, posY: position.posY + STEP_SIZE });
      } else {
        setPosition({ ...position, posY: position.posY - STEP_SIZE });
      }
      if (code === "ArrowRight") {
        setPosition({ ...position, posY: position.posY - STEP_SIZE });
      } else {
        setPosition({ ...position, posY: position.posY + STEP_SIZE });
      }
    };
    <movebug/>

    return (
      <div tabIndex={-1} className="field" onKeyDown={ladybugState}>
        <header>Click anywhere to start the game</header>
        <Ladybug orientation={position} />
      </div>
    );
  };
};
createRoot(document.querySelector("#app")).render(<App />);
