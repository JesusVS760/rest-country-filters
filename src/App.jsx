import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NextPage from "./components/NextPage";

const App = () => {
  const [NextPageCountry, setNextPageCountry] = useState("");

  const getCountry = (country) => {
    setNextPageCountry(country);
    console.log(country);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage getCountry={getCountry} />}></Route>
          <Route path="" element={<NextPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
