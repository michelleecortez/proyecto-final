import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import Menu from "./Components/Menu";
import VideogamesCrud from "./Views/VideogamesCrud";
import CellphonesCrud from "./Views/CellphonesCrud";
import CellphoneForm from "./Components/CelularForm";
import NotFound from "./Components/NotFound";
import ReactSwitch from "react-switch";
import Layout from "./Components/Layout";
import "./Components/style/button.css";
import { useThemeContext } from './Components/context/ThemeContext';

export const App = () => {
  const { contextTheme, setContextTheme } = useThemeContext();
  const [checked, setChecked] = useState(false);

  const handleSwitch = (nextChecked) => {
    setContextTheme((state) => (state === "Light" ? "Dark" : "Light"));
    setChecked(nextChecked);
    //console.log(nextChecked)
  };

  const [apiCelulares, setapiCelulares] = useState(
    "https://denny2023.azurewebsites.net/api/celulares"
  );
  const [apiJuegos, setapiJuegos] = useState(
    "https://denny2023.azurewebsites.net/api/juegos"
  );

  return (
    <div className="App">
  <header className="App-header" id={contextTheme}>
    <ReactSwitch
      onChange={handleSwitch}
      checked={checked}
      onColor="#86d3ff"
      onHandleColor="#2693e6"
      handleDiameter={30}
      uncheckedIcon={false}
      checkedIcon={false}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
      height={20}
      width={48}
      className="react-switch"
      id="material-switch"
    />
    <h2>{contextTheme} Mode</h2>

    {/* <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes> */}



      <Menu />
      <Routes>
        {/* <LoginUi /> */}

        <Route path="/" element={<Home />} />
        {/* <Route index element={<Home />} /> */}
        {/* <Route path="/videogames" element={<VideogamesCrud />} />
        <Route path="/cellphones" element={<CellphonesCrud />} /> */}

        {/* Enrutamiento a la pagina principal del CRUD de celular */}
        <Route
          path="/cellphones"
          element={<CellphonesCrud api={apiCelulares} />}
        />

        {/* Enrutamiento hacia el formulario de nuevo registro de atuor*/}
        <Route
          path="/cellphones/add"
          element={<CellphoneForm api={apiCelulares} />}
        />

        {/* Enrutamiento hacia el formulario de editar autor*/}
        <Route
          path="/cellphones/edit/:id"
          element={<CellphoneForm api={apiCelulares} />}
        />

        {/* Enrutamiento hacia el formulario de eliminar autor */}
        <Route
          path="/cellphones/delete/:id"
          element={<CellphoneForm del={true} api={apiCelulares} />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>

  </header>
</div>
  );
};

