import SearchBar from "./SearchBar";
import "../App.css";
import SearchSelect from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useState } from "react";

const Home = () => {
  const [query, setQuery] = useState("");
  return (
    <>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SearchSelect />
      </div>
      {<CountriesList query={query} />}
    </>
  );
};

export default Home;
