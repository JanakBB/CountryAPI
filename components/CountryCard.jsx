export default function CountryCard({
  name,
  flags,
  population,
  region,
  capital
}) {
  console.log(name, flags, population, region, capital)
  return (
    <a  className="country-card" href="/country.html?name=South Georgia">
      <img src={flags.svg} alt={name.common + "Flags"} />
      <div className="card-text">
        <h3 className="card-title">{name.common}</h3>
        <p>
          <b>Population: </b>
          {population.toLocaleString("en-In")}
        </p>
        <p>
          <b>Region: </b>
          {region}
        </p>
        <p>
          <b>Capital: </b>
          {capital?.[0]}
        </p>
      </div>
    </a>
  );
}
