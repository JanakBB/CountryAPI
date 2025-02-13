import SearchBar from "./SearchBar";
import "../App.css";
import SearchSelect from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useState } from "react";
import { useOutletContext } from "react-router";

const Home = () => {
  const [query, setQuery] = useState("");
  const [isDark] = useOutletContext()
  return (
    <main className={`main-container ${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SearchSelect />
      </div>
      {<CountriesList query={query} />}
    </main>
  );
};

export default Home;
