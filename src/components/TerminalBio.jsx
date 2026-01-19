import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TEXT } from '../i18n';
import './TerminalBio.css';

const TYPING_SPEED = 25;

const TerminalBio = ({ onComplete }) => {
  const { language } = useLanguage();
  const lines = TEXT[language].terminal;

  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    setDisplayedLines([]);
    setCurrentLineIndex(0);
    setCurrentText('');
  }, [language]);

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      onComplete?.();
      return;
    }

    const fullLine = lines[currentLineIndex];

    if (currentText.length < fullLine.length) {
      const timeout = setTimeout(() => {
        setCurrentText(fullLine.slice(0, currentText.length + 1));
      }, TYPING_SPEED);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => [...prev, fullLine]);
        setCurrentText('');
        setCurrentLineIndex(prev => prev + 1);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [currentText, currentLineIndex, lines, onComplete]);

  return (
    <div className="terminal-bio" translate="no" data-notranslate>
      <div className="terminal-window">
        {displayedLines.map((line, i) => (
          <div key={i} className="terminal-line">{line}</div>
        ))}
        {currentLineIndex < lines.length && (
          <div className="terminal-line">
            {currentText}
            <span className="cursor" />
          </div>
        )}
      </div>
    </div>
  );
};

export default TerminalBio;
