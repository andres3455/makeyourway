import React from 'react';
import './BackgroundScreen.css';

const BackgroundScreen = ({ children }) => {
  return (
    <div className="background-screen">
      {children}
    </div>
  );
}

export default BackgroundScreen;