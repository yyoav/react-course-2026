import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./UseEffectClock.css";

function UseEffectClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock-example">
      <nav className="breadcrumb">
        <Link to="/">← Back to Home</Link>
      </nav>

      <h1>useEffect: Clock Example</h1>

      <div className="info-box">
        <h3>🎯 Example: Clock with useEffect</h3>
        <p>
          This example demonstrates <strong>useEffect</strong> with an interval
          to update the time every second.
        </p>
        <p>
          <strong>Key Concepts:</strong> Side effects, cleanup function, and
          empty dependency array.
        </p>
      </div>

      <div className="demo-container">
        <div className="clock-display">
          <h1 className="time">{time.toLocaleTimeString()}</h1>
          <p className="date">{time.toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default UseEffectClock;
