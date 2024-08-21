import React, { useEffect, useState } from "react";
import "./NextPage.css";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const NextPage = ({ sendData }) => {
  const [matchData, setMatchData] = useState(sendData);
  const [foundCountry, setFoundCountry] = useState(null);
  const [currencies, setCurrencies] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [borders, setBorders] = useState([]);

  const { countryName } = useParams(); // extracts URL NAME TO MAKE AVAIABLE TO COMPONENT

  useEffect(() => {
    if (countryName !== "") {
      try {
        const countryFound = matchData.filter(
          (country) => country.name == countryName
        );
        // If a country is found, set the first match (assuming only one match is expected)
        if (countryFound.length > 0) {
          setFoundCountry(countryFound[0]);
        } else {
          setFoundCountry(null); // No match found
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [matchData, countryName]);

  useEffect(() => {
    if (foundCountry != null) {
      setCurrencies(foundCountry.currencies[0]);
      setLanguages(foundCountry.languages);
      setBorders(foundCountry.borders);
    }
  }, [foundCountry]);
  // console.log("LANG", languages);
  // console.log(borders);
  // console.log(foundCountry);
  // console.log("CURR:", currencies);

  return (
    <div>
      <Navbar />
      {foundCountry != null ? (
        <div className="foundCountry-container">
          <div className="foundCountry-image">
            <img src={foundCountry.flag} alt="found image" />
          </div>
          <div className="div">
            <div className="foundCountry-content">
              <div className="col1">
                <h1>{foundCountry.name}</h1>

                <p>Native Name: {foundCountry.altSpellings[1]}</p>
                <p>Population: {foundCountry.population}</p>
                <p>Region: {foundCountry.region}</p>
                <p>Sub Region: {foundCountry.subregion}</p>
                <p>Capital: {foundCountry.capital}</p>
              </div>
              <div className="col2">
                <p>Top Level Domain: {foundCountry.topLevelDomain[0]}</p>
                <p>Currencies: {currencies.name}</p>
                <p>
                  Languages:
                  {languages.map((lang) => ` ${lang.name}`).join(", ")}
                </p>
                <p></p>
              </div>
            </div>
            <div className="border-countries">
              <p>Border Countries: {`${borders} `}</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}{" "}
    </div>
  );
};

export default NextPage;
