import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import "./App.css";
import SearchSelect from "./components/SelectMenu";
import CountriesList from "./components/CountriesList";
import { useState } from "react";

const App = () => {
    const [query, setQuery] = useState("");
  return (
    <>
      <Header />
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery}/>
        <SearchSelect />
      </div>
      {query === "postpone" ? "" : <CountriesList query={query}/>}
    </>
  );
};

export default App;
