import SearchBar from "./SearchBar";
import "../App.css";
import SearchSelect from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import { useTheme } from "../hooks/useTheme";

const Home = () => {
  const [query, setQuery] = useState("");
  const [isDark] = useTheme();
  const windowSize = useWindowSize();

  return (
    <main className={`main-container ${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SearchSelect setQuery={setQuery} />
      </div>
      <h1 style={{ textAlign: "center" }}>Window Size: 
        {windowSize.width} x {windowSize.height}
      </h1>
      {<CountriesList query={query} />}
    </main>
  );
};

export default Home;
