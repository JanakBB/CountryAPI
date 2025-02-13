import { Outlet } from "react-router";
import Header from "./components/Header";
import { useState } from "react";




const App = () => {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("mode")))
  return (
    <>
      <Header  theme={[isDark, setIsDark]}/>
      <Outlet context={[isDark, setIsDark]}/>
    </>
  );
};

export default App;
