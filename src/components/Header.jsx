import React, { useMemo } from "react";
import "./Header.css";
import { useLanguage } from "../context/LanguageContext";
import { TEXT } from "../i18n";

const SECRET_MESSAGE = "Woaa you found me! Send this in the discord for a surprise ;)";
const SECRET_CHANCE = 0.001;

const Header = () => {
  const { language } = useLanguage();

  const message = useMemo(() => {
    const messages = TEXT[language].headerMessages;
    const roll = Math.random();

    if (roll < SECRET_CHANCE) {
      return SECRET_MESSAGE;
    }

    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  }, [language]); // ricalcola quando cambia la lingua

  return (
    <header className="header">
      <h1 className="header-title">{message}</h1>
    </header>
  );
};

export default Header;
