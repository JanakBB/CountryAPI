import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";

export default function CountriesList({ query }) {
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountriesList(data));
  }, []);

  const countries = countriesList.filter((country) =>
    country.name.common.toLowerCase().includes(query)
  );
  return (
    <>
      {!countriesList.length ? (
        <CountriesListShimmer />
      ) : (
        <div className="countries-container">
          {countries.map((country, i) => {
            return (
              <CountryCard
                name={country.name.common}
                flags={country.flags}
                population={country.population}
                capital={country.capital}
                key={i}
                region={country.region}
                data={country}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
