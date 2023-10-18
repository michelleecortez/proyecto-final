import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import VideogamesCrud from "./VideogamesCrud";
import CellphonesCrud from "./CellphonesCrud";
export const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videogames" element={<VideogamesCrud />} />
        <Route path="/cellphones" element={<CellphonesCrud />} />
      </Routes>
    </BrowserRouter>
  );
};
