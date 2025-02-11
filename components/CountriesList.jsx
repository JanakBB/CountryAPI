import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

export default function CountriesList({ query }) {
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => setCountriesList(data));

    const Interval = setInterval(() => {
      console.log("Close the app")
    }, [1000])

    return(() => {
      clearTimeout(Interval)
    })
    
  }, [])

  const countries = countriesList.filter((country) =>
    country.name.common.toLowerCase().includes(query)
  );
  return (
    <>
      <button onClick={() => setCountriesList([])}>Clear All Countries Data</button>
      <div className="countries-container">
        {countries.map((country, i) => (
          <CountryCard
            name={country.name}
            flags={country.flags}
            population={country.population}
            capital={country.capital}
            key={i}
            region={country.region}
          />
        ))}
      </div>
    </>
  );
}
