import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NextPage from "./Pages/NextPage";

const App = () => {
  const [NextPageCountry, setNextPageCountry] = useState("");
  const [getData, setGetData] = useState([]);

  const gettingData = (data) => {
    setGetData(data);
    // console.log("Data received:", data);
  };

  const getCountry = (country) => {
    setNextPageCountry(country);
    // console.log(country);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<HomePage getCountry={getCountry} getData={gettingData} />}
          ></Route>
          <Route
            path="/:countryName"
            element={<NextPage sendData={getData} country={NextPageCountry} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
