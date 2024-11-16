import React, { useEffect, useState } from "react";
import "./index.css";

function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeonds] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [isOver, setIsOver] = useState(false);

  const tick = () => {
    if (!isStart || isOver) return;
    if (hours === 0 && minutes === 0 && seconds === 0) {
      setIsStart(false);
      setHours(0);
      setMinutes(0);
      setSeonds(0);
    } else if (minutes === 0 && seconds == 0) {
      setHours((prev) => prev - 1);
      setMinutes(59);
      setSeonds(59);
    } else if (seconds === 0) {
      setMinutes((prev) => prev - 1);
      setSeonds(59);
    } else {
      setSeonds((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (!isStart) return;
    let timerId;
    if (isStart) {
      timerId = setInterval(() => {
        tick();
      }, 1000);
    } else {
      clearInterval(timerId);
    }

    return () => clearInterval(timerId);
  }, [isStart, hours, minutes, seconds]);

  function onClickStartAndPause() {
    if (hours !== 0 || seconds !== 0 || minutes !== 0)
      setIsStart((prev) => !prev);
  }

  function onclickRest() {
    setIsStart(false);
    setHours(0);
    setMinutes(0);
    setSeonds(0);
  }

  return (
    <>
      <div className="wrapper">
        <TimerInput text={"Hours"} number={hours} setNumber={setHours} />
        <p>:</p>
        <TimerInput text={"Minutes"} number={minutes} setNumber={setMinutes} />
        <p>:</p>
        <TimerInput text={"Seconds"} number={seconds} setNumber={setSeonds} />
      </div>
      <div className="wrapper">
        <button onClick={onClickStartAndPause} className="button">
          {!isStart ? "Start" : "Pause"}
        </button>
        <button onClick={onclickRest} className="button">
          Reset
        </button>
      </div>
    </>
  );
}

function TimerInput({ text, number, setNumber }) {
  return (
    <div className="timerWrapper">
      <div>{text}</div>
      <input
        type="number"
        className="timer-input"
        placeholder={"00"}
        maxLength={2}
        value={number}
        onChange={(e) => {
          const value = Math.max(0, Math.min(99, Number(e.target.value) || 0)); // Ensure input is between 0 and 99
          setNumber(value);
        }}
        onBlur={(e) => {
          const paddedValue = e.target.value.padStart(2, "0"); // Add padding on blur
          e.target.value = paddedValue; // Show padded value in input
        }}
      />
    </div>
  );
}

export default Timer;
