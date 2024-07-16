import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './ShareButton.css';

const ShareButton = ({ speed, navigate }) => {
  const handleShare = () => {
    const uniqueId = uuidv4();
    navigate(`/?id=${uniqueId}&speed=${speed}`);
  };

  return (
    <button className="share-button" onClick={handleShare} style={{backgroundColor:'orange', color:'black'}}>Share</button>
  );
};

export default ShareButton;
