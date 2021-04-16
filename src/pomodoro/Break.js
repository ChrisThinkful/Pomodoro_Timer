import React from "react";
import {minutesToDuration} from "../utils/duration"

function Break({
    isSessionActive,
    isTimerRunning,
    breakDuration,
    decreaseBreak,
    increaseBreak
}) {
    // const [breakDuration, setBreakDuration] = useState(5);
    // const decreaseBreak = () => {
    //     setBreakDuration(lastBreak => Math.max(1,lastBreak-1)) 
    // }
    // const increaseBreak = () => {
    //     setBreakDuration(lastBreak => Math.min(15,lastBreak+1)) 
    // }
    return (
        <div className="col">
        <div className="float-right">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-break">
              Break Duration: {minutesToDuration(breakDuration)}
            </span>
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-break"
                onClick={decreaseBreak}
                disabled={isSessionActive || isTimerRunning? true: false}
              >
                <span className="oi oi-minus" />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-break"
                onClick={increaseBreak}
                disabled={isSessionActive || isTimerRunning? true: false}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Break;