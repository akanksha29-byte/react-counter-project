import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);
  const [stop, setStop] = useState(true);
  const [reset, setReset] = useState(true);
  useEffect(() => {
    let interval = "";
    if (active) {
      interval = setInterval(() => {
        setCount(count + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [active, count]);

  const handleStart = () => {
    setActive(true);
    setStop(false);
    setReset(true);
  };
  const handleStop = () => {
    setActive(false);
    setStop(true);
    setReset(false);
  };

  const handleReset = () => {
    setActive(false);
    setReset(true);
    setCount(0);
  };
  return (
    <div className="App">
      <h1>Counter: {count < 10 ? `0${count}` : count}</h1>
      <div className="btn-container">
        <button className="btn" onClick={handleStart} disabled={active}>
          Start
        </button>
        <button className="btn" onClick={handleStop} disabled={stop}>
          Stop
        </button>
        <button className="btn" onClick={handleReset} disabled={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
