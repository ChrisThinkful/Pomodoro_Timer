import React from 'react';
import { minutesToDuration } from "../utils/duration"

function Progress({
    mode,
    // minutesToDuration,
    focusDuration,
    breakDuration,
    timeRemaining,
    isSessionActive,
    isTimerRunning,
    secondsToDuration
}) {
    let currentDuration = mode === 'focus'? focusDuration: breakDuration;
    let percent = (1 - timeRemaining / (currentDuration*60)) * 100;
    if(!isSessionActive) {
        return null
    }

    return (
        <div>
        <div className="row mb-2">
          <div className="col">
          <h2 data-testid="session-title">
            {mode === "focus"
              ? `Focusing for ${minutesToDuration(focusDuration)} minutes`
              : `On Break for ${minutesToDuration(breakDuration)} minutes`}
          </h2>
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(timeRemaining)} remaining
            </p>
            <h3>{!isTimerRunning && isSessionActive ? "PAUSED" : null}</h3>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={percent}
                style={{width: `${percent}%`}}
              />
            </div>
          </div>
        </div>
    </div>
    )
}

export default Progress;