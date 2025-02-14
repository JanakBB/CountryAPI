import { Outlet } from "react-router";
import Header from "./components/Header";
import { ThemeProvider } from "./Contexts/ThemeContext";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
