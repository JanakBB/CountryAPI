import SearchBar from "./SearchBar";
import "../App.css";
import SearchSelect from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useState } from "react";
import { useTheme } from "../hooks/useTheme";

const Home = () => {
  const [query, setQuery] = useState("");
  const [isDark] = useTheme();

  return (
    <main className={`main-container ${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SearchSelect setQuery={setQuery} />
      </div>
      {<CountriesList query={query} />}
    </main>
  );
};

export default Home;
