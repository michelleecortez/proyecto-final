import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import Menu from "./Components/Menu";
import VideogamesCrud from "./Views/VideogamesCrud";
import CellphonesCrud from "./Views/CellphonesCrud";
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
