import SearchBar from "./SearchBar";
import "../App.css";
import SearchSelect from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useContext, useState } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";

const Home = () => {
  const [query, setQuery] = useState("");
  const [isDark] = useContext(ThemeContext);
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
