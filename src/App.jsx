import React, { useEffect, useState } from "react";
import "./App.css";
import Controls from "./components/Controls";
import Timer from "./components/Timer";

function App() {
  const [mode, setMode] = useState("pomodoro");
  const [normalTime, setNormalTime] = useState(0.1);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [timeLeft, setTimeLeft] = useState(normalTime * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [buttonText, setButtonText] = useState("START");

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);

      if (timeLeft === 0) {
        clearInterval(interval);
        setIsRunning(false);
        setButtonText("START");
        setTimeout(() => {
          if (mode === "pomodoro") {
            setMode("short");
          }
        }, 1000);
      }

      return () => clearInterval(interval);
    }
  }, [isRunning, timeLeft]);

  const formatTimeLeft = (seconds) => {
    return `${Math.floor(seconds / 60)}:${
      seconds % 60 > 9 ? seconds % 60 : "0" + (seconds % 60)
    }`;
  };

  return (
    <>
      <Controls
        mode={mode}
        setMode={setMode}
        setTimeLeft={setTimeLeft}
        normalTime={normalTime}
        shortBreak={shortBreak}
        longBreak={longBreak}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        setButtonText={setButtonText}
      />
      <Timer
        remainigTime={formatTimeLeft(timeLeft)}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        buttonText={buttonText}
        setButtonText={setButtonText}
      ></Timer>
    </>
  );
}

export default App;
