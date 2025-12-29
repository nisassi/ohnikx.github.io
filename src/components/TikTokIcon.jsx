// src/components/TikTokIcon.jsx
import React from 'react';

const TikTokIcon = ({ size = 32, color = "#00ffcc" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 256 256"
    fill={color}
  >
    <path d="M208.7 93.7c-10.5 0-20.7-1.8-30.3-5.2v72.2c0 30.4-24.7 55.1-55.1 55.1-30.4 0-55.1-24.7-55.1-55.1s24.7-55.1 55.1-55.1c9.6 0 18.7 2.6 26.5 7.1V76.7c-8.4-3.1-17.3-4.8-26.5-4.8-39.8 0-72.1 32.3-72.1 72.1s32.3 72.1 72.1 72.1 72.1-32.3 72.1-72.1V93.7z"/>
  </svg>
);

export default TikTokIcon;