import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SpeedSlider from './SpeedSlider';
import ShareButton from './ShareButton';
import Clock from './Clock';

const TrackingScreen = () => {
  const [speed, setSpeed] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const speedParam = params.get('speed');
    if (speedParam) {
      setSpeed(parseFloat(speedParam));
    }
  }, [location.search]);

  return (
    <div className="App">
      
      <Clock speed={speed}/>
      <SpeedSlider speed={speed} setSpeed={setSpeed} />
      <ShareButton speed={speed} navigate={navigate} />
    </div>
  );
};

export default TrackingScreen;
