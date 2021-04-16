import React, {useState} from "react"
import { minutesToDuration } from "../utils/duration"

function Focus({
    isSessionActive,
    isTimerRunning,
    focusDuration,
    decreaseFocus,
    increaseFocus,
}) {
    // const [focusDuration, setFocusDuration] = useState(25);
    // const decreaseFocus = () => {
    //     setFocusDuration(lastFocus => Math.max(5,lastFocus-5))
    // }
    // const increaseFocus = () => {
    //     setFocusDuration(lastFocus => Math.min(60,lastFocus+5)) 
    // }

    return (
        <div className="col">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-focus">
          Focus Duration: {minutesToDuration(focusDuration)}
          </span>
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-focus"
              onClick={decreaseFocus}
              disabled={isSessionActive || isTimerRunning? true: false}
            >
              <span className="oi oi-minus" />
            </button>
             <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-focus"
              onClick={increaseFocus}
              disabled={isSessionActive || isTimerRunning? true: false}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
    );
}

export default Focus;