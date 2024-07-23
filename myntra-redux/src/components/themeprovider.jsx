import React from "react";
import { useSelector } from "react-redux";

export default function ThemeProvider({ children }) {
  const themeState = useSelector((state) => state.theme);
  const theme = themeState?.theme || 'light'; 

  return (
    <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      {children}
    </div>
  );
}
