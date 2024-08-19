import React from "react";
import "./NextPage.css";
import { useParams } from "react-router-dom";

const NextPage = () => {
  const { countryName } = useParams(); // extracts URL NAME TO MAKE AVAIABLE TO COMPONENT
  return <div className="next-page-container">{countryName}</div>;
};

export default NextPage;
