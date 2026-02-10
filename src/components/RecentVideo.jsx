import React, { useEffect, useState } from 'react';
import './RecentVideo.css';

const API_KEY = process.env.REACT_APP_YOUTUBE_KEY;

const RecentVideo = ({ channelId, title }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    if (!channelId) return; // Safety check
    setIsVisible(true);

    const fetchLatestVideo = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=1`
        );
        const data = await res.json();
        const id = data.items?.[0]?.id?.videoId;
        if (id) setVideoId(id);
      } catch (err) {
        console.error('Failed to fetch latest video:', err);
      }
    };

    fetchLatestVideo();
  }, [channelId]);

  // Only render if we have a valid videoId
  if (!videoId) return null;

  return (
    <div className={`recent-video ${isVisible ? 'fade-in-up' : ''}`}>
      <h2 className="section-title">{title}</h2>
      <div className="video-container">
        <iframe
          width="100%"
          height="500"
          src={videoId ? `https://www.youtube.com/embed/${videoId}` : null}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default RecentVideo;
