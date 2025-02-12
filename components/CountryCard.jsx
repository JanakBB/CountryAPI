import { Link } from "react-router";

export default function CountryCard({
  name,
  flags,
  population,
  region,
  capital,
  data,
}) {
  return (
    <Link className="country-card" to={`/${name}`} state={data}>
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
    </Link>
  );
}
