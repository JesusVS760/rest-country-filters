import React, { useState } from "react";
import "./Card.css";

const Card = ({ data }) => {
  const [showItems, setShowItems] = useState(data);

  return showItems.map((country) => (
    <div className="card-container">
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
