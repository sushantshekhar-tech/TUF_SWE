import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Banner = ({ visible, description, timer, link }) => {
  const [timeLeft, setTimeLeft] = useState(timer);

  useEffect(() => {
    if (visible && timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [visible, timeLeft]);

  if (!visible) return null;

  return (
    <div className="banner">
      <p>{description}</p>
      <p>{Math.floor(timeLeft / 60)}:{timeLeft % 60}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Learn More</a>
    </div>
  );
};

export default Banner;
