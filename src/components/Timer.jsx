import React from "react";
import "../styles/Timer.css";

function Timer({
  remainigTime,
  isRunning,
  setIsRunning,
  buttonText,
  setButtonText,
}) {
  const handleClick = () => {
    if (remainigTime === "0:00") {
      return null;
    }
    setButtonText(buttonText === "START" ? "STOP" : "START");
    setIsRunning(!isRunning);
  };

  return (
    <div className="timer">
      <h3>{remainigTime}</h3>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}

export default Timer;
