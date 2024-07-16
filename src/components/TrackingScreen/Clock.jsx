import React, { useState, useEffect, useRef } from 'react';
import './Clock.css';

const Clock = ({ speed }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [remainingTime, setRemainingTime] = useState(120 * 60); // 120 minutes in seconds

  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setRemainingTime((prev) => {
        const newTime = prev - 1 * speed;
        if (newTime <= 0) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [speed]);

  const getClockHandsStyle = () => {
    const now = new Date(currentTime.getTime() - (120 * 60 - remainingTime) * 1000);
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    return {
      secondHand: { transform: `rotate(${360 - seconds * 6}deg)` },
      minuteHand: { transform: `rotate(${360 - (minutes * 6 + seconds / 10)}deg)` },
      hourHand: { transform: `rotate(${360 - (hours * 30 + minutes / 2)}deg)` },
    };
  };

  const { secondHand, minuteHand, hourHand } = getClockHandsStyle();

  const minutesLeft = Math.floor(remainingTime / 60);
  const secondsLeft = Math.floor(remainingTime % 60);

  return (
    <div className="clock-container">
      <div className="clock">
        <div className="clock-face">
          <div className="hand hour-hand" style={hourHand}></div>
          <div className="hand minute-hand" style={minuteHand}></div>
          <div className="hand second-hand" style={secondHand}></div>
        </div>
      </div>
      <div className="countdown">
       <span style={{color:'red'}}>{minutesLeft}</span>  M <span style={{color:'red'}}>{secondsLeft}</span> sec left
      </div>
    </div>
  );
};

export default Clock;
