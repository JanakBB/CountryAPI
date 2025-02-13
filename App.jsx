import { Outlet } from "react-router";
import Header from "./components/Header";
import { useState } from "react";
import { ThemeContext } from "./Contexts/ThemeContext";




const App = () => {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("mode")))
  return (
    <ThemeContext.Provider value="Hello">
      <Header  theme={[isDark, setIsDark]}/>
      <Outlet context={[isDark, setIsDark]}/>
    </ThemeContext.Provider>
  );
};

export default App;
