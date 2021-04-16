import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import { minutesToDuration, secondsToDuration } from "../utils/duration";
import PlayStop from "./PlayStop"
import Focus from "./Focus";
import Break from "./Break"
import Progress from './Progress'

function Pomodoro() {
  const [focusDuration, setFocusDuration] = useState(25);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [breakDuration, setBreakDuration] = useState(5);
  const [timeRemaining, setTimeRemaining] = useState(25 * 60);
  const [mode, setMode] = useState("focus");
  const [isSessionActive, setIsSessionActive] = useState(false);

  const decreaseBreak = () => {
    setBreakDuration(lastBreak => Math.max(1,lastBreak-1)) 
  }
  const increaseBreak = () => {
    setBreakDuration(lastBreak => Math.min(15,lastBreak+1)) 
  }
  const decreaseFocus = () => {
    setFocusDuration(lastFocus => Math.max(5,lastFocus-5))
  }
  const increaseFocus = () => {
    setFocusDuration(lastFocus => Math.min(60,lastFocus+5)) 
  }

  useInterval(
    () => {
      if (timeRemaining === 0) {
          new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
          const duration = mode === 'focus' ? breakDuration : focusDuration; 
          setTimeRemaining(duration * 60);
          setMode((prevMode) => (prevMode==='focus'?'break':'focus'))
          return;
      }
      setTimeRemaining((currentTimeRemaining) => currentTimeRemaining - 1);
    },
    isTimerRunning ? 1000 : null
  );

  function playPause() {
    if (!isSessionActive) {
      setIsSessionActive(true);
      setTimeRemaining(focusDuration * 60);
    }
    setIsTimerRunning((prevState) => !prevState);
  }

    const stopTimer = () => {
    setIsSessionActive(false);
    setIsTimerRunning(false);
    setMode("focus");
  };

  return (
    <div className="pomodoro">
      <div className="row">
      <Focus 
      setFocusDuration={setFocusDuration} 
      setBreakDuration={setBreakDuration}
      isSessionActive={isSessionActive}
      minutesToDuration={minutesToDuration}
      setIsSessionActive={setIsSessionActive}
      focusDuration={focusDuration}
      increaseFocus={increaseFocus}
      decreaseFocus={decreaseFocus}/>
      <Break 
      setFocusDuration={setFocusDuration} 
      setBreakDuration={setBreakDuration}
      isSessionActive={isSessionActive}
      minutesToDuration={minutesToDuration}
      setIsSessionActive={setIsSessionActive}
      breakDuration={breakDuration}
      decreaseBreak={decreaseBreak}
      increaseBreak={increaseBreak}/>
      </div>
      <PlayStop 
      playPause={playPause}
      stopTimer={stopTimer}
      isSessionActive={isSessionActive}
      isTimerRunning={isTimerRunning}
      />
      <Progress 
      mode={mode}
      minutesToDuration={minutesToDuration}
      focusDuration={focusDuration}
      breakDuration={breakDuration}
      timeRemaining={timeRemaining}
      isSessionActive={isSessionActive}
      isTimerRunning={isTimerRunning}
      secondsToDuration={secondsToDuration}
      />
    </div>
  );
}

export default Pomodoro;
