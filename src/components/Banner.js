import React, { useState, useEffect } from 'react';

const Banner = ({ visible, description, timer, link }) => {
  const [timeLeft, setTimeLeft] = useState(timer);

  useEffect(() => {
    if (visible) {
      setTimeLeft(timer); 
      if (timer > 0) {
        const interval = setInterval(() => {
          setTimeLeft(prev => {
            if (prev <= 1) {
              clearInterval(interval);
              return 0; 
            }
            return prev - 1; 
          });
        }, 1000);

        return () => clearInterval(interval); 
      }
    } else {
      setTimeLeft(0); 
    }
  }, [visible, timer]); 

  if (!visible || timeLeft <= 0) return null; 

  return (
    <div className="banner text-white text-center py-3" style={{ position: 'relative' }}>
      <img 
        src={link} 
        alt="Banner" 
        style={{ width: '100%', height: 'auto', maxHeight: '300px', objectFit: 'cover' }}
      />
      <div 
        className="banner-content"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          textAlign: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '10px',
          borderRadius: '5px'
        }}
      >
        <p className="mb-2">
          {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
        </p>
        <a className="btn btn-light" href={link} target="_blank" rel="noopener noreferrer">Learn More</a>
      </div>
      <h1 style={{ color: 'black' }}>{description}</h1>

    </div>
  );
};

export default Banner;
