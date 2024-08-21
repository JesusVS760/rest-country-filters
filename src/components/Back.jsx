import React, { useState } from "react";
import arrow from "../assets/back-arrow.png";
import "./Back.css";
import { useNavigate } from "react-router-dom";

const Back = ({ sendMode }) => {
  const [backMode, setBackMode] = useState(false);

  const navigate = useNavigate();

  const handleBackPage = () => {
    navigate("/");
  };

  return (
    <div className={!sendMode ? "back-container-dark" : "back-container"}>
      <button
        onClick={() => {
          setBackMode(!sendMode);
          handleBackPage();
        }}
      >
        <img src={arrow} alt="arrow" />
        Back
      </button>
    </div>
  );
};

export default Back;
