import React, { useEffect, useState } from 'react';
import { Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TEXT } from '../i18n';
import './GameCards.css';

const GameCards = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [osuStats, setOsuStats] = useState(null);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);

    const OSU_API_KEY = "5f18654c9151ec0bd95f06f25136cf9b0be345d6";
    const osuUsername = "NikiOnOsu";

    fetch(`https://osu.ppy.sh/api/get_user?k=${OSU_API_KEY}&u=${osuUsername}`)
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) setOsuStats(data[0]);
      })
      .catch(err => console.error("Failed to fetch osu! stats:", err));

  }, []);

  const valorantData = {
    rank: 'Platinum 2',
    date: '13/2/2026',
    mains: 'Duelists, Initiators.',
    sensitivity: '0.30 @ 800 DPI',
    clipUrl: 'https://customer-assets.emergentagent.com/job_ohnikx-terminal/artifacts/cfh5k76x_valoclip.mp4'
  };

  const osuData = {
    clipUrl: 'https://customer-assets.emergentagent.com/job_ohnikx-terminal/artifacts/9bsflu10_1228.mp4',
    keyboard: 'Attack Shark X65HE',
    tablet: 'Wacom CTL-4100WL',
    aimingStyle: 'Drag'
  };

  return (
    <div className={`game-cards ${isVisible ? 'fade-in-up' : ''}`}>
      <h2 className="section-title">{TEXT[language].gameStatsTitle}</h2>

      <div className="cards-container">
        {/* VALORANT Card */}
        <div className="game-card">
          <div className="card-header">
            <h3>VALORANT</h3>
            <Play className="icon" size={24} />
          </div>
          <div className="card-content">
            <div className="stat-row">
              <span className="stat-label">Current Rank:</span>
              <span className="stat-value">{valorantData.rank}</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">Last Updated:</span>
              <span className="stat-value">{valorantData.date}</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">Mains:</span>
              <span className="stat-value">{valorantData.mains}</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">Sensitivity:</span>
              <span className="stat-value">{valorantData.sensitivity}</span>
            </div>
            <div className="clip-container">
              <video src={valorantData.clipUrl} autoPlay loop muted playsInline />
            </div>
          </div>
        </div>

        {/* osu! Card */}
        <div className="game-card">
          <div className="card-header">
            <h3>osu!</h3>
            <Play className="icon" size={24} />
          </div>
          <div className="card-content">
            {osuStats ? (
              <>
                <div className="stat-row">
                  <span className="stat-label">Global Rank:</span>
                  <span className="stat-value">#{osuStats.pp_rank?.toLocaleString() || 'N/A'}</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Country Rank:</span>
                  <span className="stat-value">
                    #{osuStats.pp_country_rank?.toLocaleString() || 'N/A'} ({osuStats.country})
                  </span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">PP:</span>
                  <span className="stat-value">{Math.round(osuStats.pp_raw)}pp</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Accuracy:</span>
                  <span className="stat-value">{parseFloat(osuStats.accuracy).toFixed(2)}%</span>
                </div>
              </>
            ) : (
              <div className="loading">Loading stats...</div>
            )}
            <div className="stat-row">
              <span className="stat-label">Keyboard:</span>
              <span className="stat-value">{osuData.keyboard}</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">Tablet:</span>
              <span className="stat-value">{osuData.tablet}</span>
            </div>
            <div className="stat-row">
              <span className="stat-label">Aiming Style:</span>
              <span className="stat-value">{osuData.aimingStyle}</span>
            </div>
            <div className="clip-container">
              <video src={osuData.clipUrl} autoPlay loop muted playsInline />
            </div>
          </div>
        </div>

        {/* Other Games Card */}
        <div className="game-card">
          <div className="card-header">
            <h3>Other Games</h3>
            <Play className="icon" size={24} />
          </div>
          <div className="card-content">
            <p className="fun-note">
              Coming soon...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCards;
