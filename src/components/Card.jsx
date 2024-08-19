import React, { useState } from "react";
import "./Card.css";

const Card = ({ data, matchMode, page }) => {
  const [showItems, setShowItems] = useState(data);

  const handlePage = (country) => {
    // console.log(country);
    page(country);
  };

  return showItems.map((country) => (
    <div
      onClick={() => handlePage(country.name)}
      className={!matchMode ? "card-container" : "card-container-dark"}
      key={country.name}
    >
      <div className="country-img">
        <img src={country.flag} alt="image" />
      </div>
      <div className="country-info">
        <h2>{country.name}</h2>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
      </div>
    </div>
  ));
};

export default Card;
