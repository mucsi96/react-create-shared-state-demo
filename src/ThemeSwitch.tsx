import React from "react";
import { useTheme } from "./useTheme";

export const ThemeSwitch = () => {
  const [theme, setTheme] = useTheme();
  const otherTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      className="theme-switch"
      type="button"
      onClick={() => setTheme(otherTheme)}
    >
      {theme}
    </button>
  );
};
