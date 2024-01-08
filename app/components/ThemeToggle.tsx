'use client'
import React from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = React.useState("cupcake");

  const toggleTheme = () => {
    setTheme(theme === "coffee" ? "cupcake" : "coffee");
  };

  // initially set the theme and "listen" for changes to apply them to the HTML tag
  React.useEffect(() => {
    const htmlElement = document.querySelector("html");

    if (htmlElement) {
      htmlElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  return (
    <label>
      <input type="checkbox" onClick={toggleTheme} />
      {theme === 'coffee' ? 'LIGHTMODE' : 'DARKMODE'}
    </label>
  );
};

export default ThemeToggle;
