import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './BugNotice.css';

const SHOW_BUG_NOTICE = false; // <-- cambia in true per mostrarlo

const BugNotice = () => {
  const { language } = useLanguage();

  if (!SHOW_BUG_NOTICE) return null; // non renderizza nulla se disattivato

  return (
    <div className="bug-notice">
      {language === 'en' ? "All Functional" : "Tutto Operativo"}
    </div>
  );
};

export default BugNotice;
