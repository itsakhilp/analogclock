import React from 'react';
import './SpeedSlider.css';

const SpeedSlider = ({ speed, setSpeed }) => {
  return (
    <div className="speed-slider">
      <input
        type="range"
        min="0.1"
        max="5"
        step="0.1"
        value={speed}
        onChange={(e) => setSpeed(parseFloat(e.target.value))}
      />
      <label>Speed: <span style={{color:'green',fontSize:'20px'}}>{speed}x</span></label>
    </div>
  );
};

export default SpeedSlider;
