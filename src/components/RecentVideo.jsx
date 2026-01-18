import React, { useEffect, useState } from 'react';
import './RecentVideo.css';

const CHANNEL_ID = 'UCULYORQHPCYDWcQwUJ3TMnQ'; 
const CORS_PROXY = 'https://api.allorigins.win/raw?url=';

const RecentVideo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    setIsVisible(true);

    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

    fetch(CORS_PROXY + encodeURIComponent(rssUrl))
      .then(res => res.text())
      .then(xmlText => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(xmlText, 'application/xml');
        const entry = xml.querySelector('entry link');

        if (entry) {
          const href = entry.getAttribute('href');
          const id = href.split('v=')[1];
          setVideoId(id);
        }
      })
      .catch(err => console.error('Failed to fetch latest video:', err));
  }, []);

  // Optional fallback (prevents blank section)
  if (!videoId) return null;

  return (
    <div className={`recent-video ${isVisible ? 'fade-in-up' : ''}`}>
      <h2 className="section-title">Recent Video</h2>
      <div className="video-container">
        <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Recent Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default RecentVideo;
