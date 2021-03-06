import useStats from "../utils/useStats";
import React, { useState } from "react";
import Stats from "./Stats";

export default function CountriesSelector() {
  const { stats: countries, loading, error } = useStats(
    "https://covid19.mathdro.id/api/countries"
  );
  const [selectedCountry, setSelectedCountry] = useState("USA");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  console.log(countries);
  if (!countries) return <p>Loading...</p>;
  return (
    <div>
      <h1>Currently showing {selectedCountry}</h1>
      <select
        defaultValue={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        {countries.countries.map((country) => {
          return (
            <option key={country.name} value={country.iso3}>
              {country.name}
            </option>
          );
        })}
      </select>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      />
    </div>
  );
}
