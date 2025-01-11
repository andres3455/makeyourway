import React from 'react';
import './BoxVideo.css';

function Box({ videoSrc }) {
  return (
    <div className="box">
      <video autoPlay loop muted>
        <source src={process.env.PUBLIC_URL + videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}

export default Box;