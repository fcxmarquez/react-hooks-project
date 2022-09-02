import React, { useState, useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const color = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <h1 style={{ color }}>ReactHook</h1>
      <button type="button" onClick={handleClick}>
        {darkMode ? "Dark" : "Light"}
      </button>
    </div>
  );
};
