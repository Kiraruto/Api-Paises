/** @format */

const url = async () => {
  const urlApi = "https://restcountries.com/v3.1/all";

  try {
    const result = await fetch(urlApi).then((res) => res.json());
    const mappedData = result.map((country) => {
      const flag = country.flags?.png;
      const name = country.name?.common;
      const languages = country.languages
        ? Object.values(country.languages)
        : [];
      const currencies = country.currencies
        ? Object.values(country.currencies)
        : [];
      const continents = country?.continents;
      const capital = country.capital;

      return { flag, name, languages, currencies, continents, capital };
    });

    return mappedData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default url;
