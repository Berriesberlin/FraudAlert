import React, { useEffect } from 'react';

const Workshop = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="workshop">
      <h2>Fraud Awareness Workshop</h2>
      <p>Protect Yourself and Your Loved Ones from Scams</p>
      
      {/* Calendly inline widget */}
      <div 
        className="calendly-inline-widget" 
        data-url="https://calendly.com/bevlynlim16/30min" 
        style={{ minWidth: '320px', height: '700px' }}>
      </div>
    </div>
  );
};

export default Workshop;
