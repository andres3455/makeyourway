import React from 'react';
import './BoxVideo.css';

const Box = ({ videoSrc, className }) => {
  return (
    <div className={`box ${className}`}>
      <video autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Box;