import React, { useState } from "react";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <h1>ReactHook</h1>
      <button type="button" onClick={handleClick}>
        {darkMode ? "Dark" : "Light"}
      </button>
    </div>
  );
};
