import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("mode"))
  );
  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
      {children}
    </ThemeContext.Provider>
  );
};
