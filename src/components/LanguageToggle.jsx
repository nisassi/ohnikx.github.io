import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import "./LanguageToggle.css"; // styling file

const LanguageToggle = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="language-toggle">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="language-select"
      >
        <option value="en">EN</option>
        <option value="it">IT</option>
      </select>
    </div>
  );
};

export default LanguageToggle;
