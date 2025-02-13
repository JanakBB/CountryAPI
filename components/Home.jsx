import SearchBar from "./SearchBar";
import "../App.css";
import SearchSelect from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import useWindowSize from "../hooks/useWindowSize";

const Home = () => {
  const [query, setQuery] = useState("");
  const [isDark] = useContext(ThemeContext);
  const windowSize = useWindowSize()


  return (
    <main className={`main-container ${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SearchSelect />
      </div>
      <h1 style={{textAlign: "center"}}>{windowSize.width} x {windowSize.height}</h1>
      {<CountriesList query={query} />}
    </main>
  );
};

export default Home;
