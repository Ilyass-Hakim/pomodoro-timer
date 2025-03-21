import React from "react";
import "../styles/Controls.css";

function Controls({
  mode,
  setMode,
  setTimeLeft,
  normalTime,
  shortBreak,
  longBreak,
  isRunning,
  setIsRunning,
  setButtonText,
}) {
  const handleModeChange = (event) => {
    setMode(event.target.id);
    setIsRunning(false);
    setButtonText("START");
    switch (event.target.id) {
      case "pomodoro":
        setTimeLeft(normalTime * 60);
        break;
      case "short":
        setTimeLeft(shortBreak * 60);
        break;
      case "long":
        setTimeLeft(longBreak * 60);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <input
        type="radio"
        id="pomodoro"
        name="mode"
        checked={mode === "pomodoro"}
        onChange={handleModeChange}
      />
      <label>pomodoro</label>

      <input
        type="radio"
        id="short"
        name="mode"
        onChange={handleModeChange}
        checked={mode === "short"}
      />
      <label>short break</label>

      <input
        type="radio"
        id="long"
        name="mode"
        onChange={handleModeChange}
        checked={mode === "long"}
      />
      <label>long break</label>
    </div>
  );
}

export default Controls;
