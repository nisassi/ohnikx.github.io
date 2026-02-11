import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import BugNotice from './components/BugNotice'; 
import TerminalBio from './components/TerminalBio';
import RecentVideo from './components/RecentVideo';
import GameCards from './components/GameCards';
import Equipment from './components/Equipment';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import LanguageToggle from './components/LanguageToggle'; // top-right toggle

const BACKGROUND_VIDEOS = [
  "/videos/wandering_swordsman.mp4",
  "/videos/midnight_bloom.mp4",
  "/videos/two_heavens_as_one.mp4",
  "/videos/ushio_noa.mp4",
  "/videos/vagabon_miyamoto.mp4",
];

function App() {
  const [backgroundVideo, setBackgroundVideo] = useState('');
  const [terminalComplete, setTerminalComplete] = useState(false);

  useEffect(() => {
    // Pick a random video once when the app mounts
    const randomVideo = BACKGROUND_VIDEOS[Math.floor(Math.random() * BACKGROUND_VIDEOS.length)];
    setBackgroundVideo(randomVideo);
  }, []);

  return (
    <div className="App">
      {/* Language toggle top-right */}
      <LanguageToggle />

      {/* Only render video if backgroundVideo is ready */}
      {backgroundVideo && (
        <video autoPlay loop muted playsInline className="background-video">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}

      <div className="background-overlay"></div>

      <div className="content">
        <Header />
        <BugNotice />
        <TerminalBio onComplete={() => setTerminalComplete(true)} />

        {terminalComplete && (
          <>
            <RecentVideo
              channelId="UCsUaSeJ5deBKVDqLtdCD6Eg"
              title="Recent Video on Main Channel"
            />
            <RecentVideo
              channelId="UCULYORQHPCYDWcQwUJ3TMnQ"
              title="Recent Video on Second Channel"
            />
            <GameCards />
            <Equipment />
            <SocialLinks />
          </>
        )}

        <Footer />
      </div>
    </div>
  );
}

export default App;
