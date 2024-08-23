import React, { useEffect, useState } from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ data, matchMode, page, findSearch }) => {
  const [showItems, setShowItems] = useState(data);

  const navigate = useNavigate();
  const handlePage = (country) => {
    page(country);
    navigate(`/${country}`);
  };

  useEffect(() => {
    if (findSearch !== "") {
      findSearch = findSearch.toLowerCase();
      const filterItems = data.filter((country) =>
        country.name.toLowerCase().includes(findSearch)
      );
      // console.log("filter", filterItems);
      setShowItems(filterItems);
    } else {
      setShowItems(data);
    }
  }, [findSearch]);

  return (
    <div>
      <div className="cards">
        {showItems.map((country) => (
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
        ))}
      </div>
    </div>
  );
};

export default Card;
