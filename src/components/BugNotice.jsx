import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { TEXT } from '../i18n';
import './BugNotice.css';

const BugNotice = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="bug-notice">
      {TEXT[language].bugNotice}
    </div>
  );
};

export default BugNotice;
