import React, { useState, useEffect } from 'react';
import './TerminalBio.css';

const TERMINAL_LINES = [
  '/home/ohnikx > Accessing Website...',
  '/home/ohnikx > Access Granted!',
  '/home/ohnikx > Note from creator: Welcome to my new Website!',
  '/home/ohnikx > Learning C, Python, HTML, Zsh & more',
  '/home/ohnikx > Upcoming Content Creator'
];

const TYPING_SPEED = 35;

const TerminalBio = ({ onComplete }) => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    if (currentLineIndex >= TERMINAL_LINES.length) {
      onComplete?.();
      return;
    }

    const fullLine = TERMINAL_LINES[currentLineIndex];

    if (currentText.length < fullLine.length) {
      const timeout = setTimeout(() => {
        setCurrentText(fullLine.slice(0, currentText.length + 1));
      }, TYPING_SPEED);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedLines([...displayedLines, fullLine]);
        setCurrentText('');
        setCurrentLineIndex(currentLineIndex + 1);
      }, 350);
      return () => clearTimeout(timeout);
    }
  }, [currentText, currentLineIndex, displayedLines, onComplete]);

  return (
    <div className="terminal-bio">
      <div className="terminal-window">
        {displayedLines.map((line, index) => (
          <div key={index} className="terminal-line">
            {line}
          </div>
        ))}
        {currentLineIndex < TERMINAL_LINES.length && (
          <div className="terminal-line">
            {currentText}
            <span className="cursor"></span> {/* Only one cursor */}
          </div>
        )}
      </div>
    </div>
  );
};

export default TerminalBio;
