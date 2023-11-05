import React, { useState, useEffect } from "react";
import "./progressbar.scss";
import { useUserContext } from "../../context/UserContext";

export default function Progressbar() {
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const { addTaskScore } = useUserContext();

  useEffect(() => {
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 2)), 50);
    }
  }, [filled, isRunning]);

  function increaseScore() {
    addTaskScore(5);
  }

  return (
    <div className="container">
      <div className="progressbar">
        <div
          style={{
            height: "100%",
            width: `${filled}%`,
            backgroundColor: "#a66cff",
            transition: "width 0.5s",
          }}
        ></div>
        <span className="progressPercent">{filled}%</span>
      </div>
      <button
        className="btn"
        onClick={() => {
          setIsRunning(true);
          increaseScore();
        }}
      >
        Done
      </button>
    </div>
  );
}
