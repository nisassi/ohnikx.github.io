import React, { useEffect, useState } from 'react';
import './RecentVideo.css';

const RecentVideo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`recent-video ${isVisible ? 'fade-in-up' : ''}`}>
      <h2 className="section-title">Recent Video</h2>
      <div className="video-container">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/KEOu88B9Sm0"
          title="Recent Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default RecentVideo;
