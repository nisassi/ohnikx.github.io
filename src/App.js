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
import { LanguageProvider } from './context/LanguageContext'; 

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
    const randomVideo = BACKGROUND_VIDEOS[Math.floor(Math.random() * BACKGROUND_VIDEOS.length)];
    setBackgroundVideo(randomVideo);
  }, []);

  return (
    <LanguageProvider>
      <div className="App">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="background-overlay"></div>
        <div className="content">
          <Header />
          <BugNotice /> {/* <-- notice added here */}
          <TerminalBio onComplete={() => setTerminalComplete(true)} />
          {terminalComplete && (
            <>
              <RecentVideo />
              <GameCards />
              <Equipment />
              <SocialLinks />
            </>
          )}
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
