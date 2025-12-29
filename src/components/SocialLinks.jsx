// src/components/SocialLinks.jsx
import React, { useEffect, useState } from 'react';
import { Youtube, Instagram, Twitch, MessageCircle } from 'lucide-react';
import TikTokIcon from './TikTokIcon'; // <-- import the new TikTok icon
import './SocialLinks.css';

const SocialLinks = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 900);
  }, []);

  const socials = [
    { icon: Youtube, label: 'YouTube (Main)', url: 'https://www.youtube.com/@OhNikx' },
    { icon: Youtube, label: 'YouTube 2', url: 'https://www.youtube.com/@OhNikx2' },
    { icon: TikTokIcon, label: 'TikTok', url: 'https://www.tiktok.com/@ohniikx' }, // <-- use custom icon
    { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/ohniikx' },
    { icon: Twitch, label: 'Twitch', url: 'https://www.twitch.tv/OhNiikx' },
    { icon: MessageCircle, label: 'Discord', url: 'https://discord.gg/Wr3Dyacpva' }
  ];

  return (
    <div className={`social-links ${isVisible ? 'fade-in-up' : ''}`}>
      <h2 className="section-title">You can also find me here!</h2>
      <div className="social-grid">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-item"
          >
            <social.icon className="social-icon" size={32} />
            <span className="social-label">{social.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;