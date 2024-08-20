import React, { useState } from "react";
import "./NextPage.css";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const NextPage = ({ sendData }) => {
  const [matchData, setMatchData] = useState(sendData);
  const [foundCountry, setFoundCountry] = useState({});
  //   console.log("Countries", matchData);

  const { countryName } = useParams(); // extracts URL NAME TO MAKE AVAIABLE TO COMPONENT

  const countryFound = matchData.filter(
    (country) => country.name === countryName
  );
  console.log(countryFound);
  return (
    <div className="next-page-container">
      <Navbar />
      {countryName};
    </div>
  );
};

export default NextPage;
