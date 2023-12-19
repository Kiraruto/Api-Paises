/** @format */

// Em Second.js
import { useParams } from "react-router-dom";
import FlagsComponent from "../../flagsId";
import "../css/Second.css"; // Import your CSS file

const Second = () => {
  const { index } = useParams();
  const Flags = FlagsComponent();
  const selectedCountry = Flags[index];

  if (!selectedCountry) {
    return <div className="not-found">Country not found</div>;
  }

  const extractCurrencyNames = () => {
    if (selectedCountry.currencies) {
      return Object.values(selectedCountry.currencies)
        .map((curr) => curr.name)
        .join(", ");
    }
    return "";
  };

  return (
    <div className="country-info">
      <img
        className="flag"
        src={selectedCountry.flag}
        alt={selectedCountry.name}
      />
      <h1>Name: {selectedCountry.name}</h1>
      <h2>Language: {selectedCountry.languages.join(" ")}</h2>
      <h2>Currency: {extractCurrencyNames()}</h2>
      <h2>Continent: {selectedCountry.continents}</h2>
      <h2>Capital: {selectedCountry.capital}</h2>
    </div>
  );
};

export default Second;
