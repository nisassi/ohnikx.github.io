import React, { useMemo } from "react";
import "./Header.css";

const NORMAL_MESSAGES = [
  "Hello, user!",
  "Welcome in.",
  "Heya! Welcome in!",
  "Morning.",
  "Hello there, wild traveler."
];

const SECRET_MESSAGE = "Woaa you found me! Send this in the discord for a surprise ;)";

// 0.001% chance = 1 in 100,000
const SECRET_CHANCE = 0.00001;

const Header = () => {
  const message = useMemo(() => {
    const roll = Math.random();

    if (roll < SECRET_CHANCE) {
      return SECRET_MESSAGE;
    }

    const randomIndex = Math.floor(Math.random() * NORMAL_MESSAGES.length);
    return NORMAL_MESSAGES[randomIndex];
  }, []);

  return (
    <header className="header">
      <h1 className="header-title">{message}</h1>
    </header>
  );
};

export default Header;
