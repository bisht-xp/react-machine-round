import React, { useEffect, useRef, useState } from "react";
import "./index.css";

// two buttons
// start and stop
// on start click increment a counter from 0 every 1 sec.
// on stop this counter should pause.
// on click start again counter resume

// They don't necessary nedd to take props
// This one aslo has an explicit return
let intervalId;
const IncrementCounter = () => {
  const [counter, setCounter] = useState(0);
  const [start, setStart] = useState(false);
  const timmerRef = useRef(null);

  // first method

  // const startCounter = () => {
  //   intervalId = setInterval(() => {
  //     setCounter((prev) => prev + 1);
  //   }, 1000);
  // };

  // const stopCounter = () => {

  //   clearInterval(intervalId);
  // };

  useEffect(() => {
    if (start) {
      timmerRef.current = setTimeout(() => {
        setCounter(counter + 1);
      }, 1000);
    }

    return () => clearTimeout(timmerRef.current);
  }, [counter, start]);

  // second method
  const startCounter = () => {
    setStart(true);
  };

  const stopCounter = () => {
    setStart(false);
  };

  return (
    <div className="container-wrapper">
      <div className="timmer">{counter}</div>
      <div className="button-container">
        <button onClick={startCounter} className="button">
          Start
        </button>
        <button onClick={stopCounter} className="button">
          Stop
        </button>
      </div>
    </div>
  );
};

export default IncrementCounter;
