import MenuItem from "./MenuItem";
import "./style/button.css";
import IMGKodigo from "../Components/img/kodiStore.png";
import { Link } from "react-router-dom";

const Menu = () => {
  // return (
  //   <div className="col-2 bg-primary menu ">
  //     <Link className="navbar-brand" to={"/"}>
  //       <img src={IMGKodigo} className="imgKodigo" alt="logo" />
  //     </Link>

  //     <MenuItem path="/cellphones" label="Celulares" />
  //     <MenuItem path="/videogames" label="Juegos" />
  //     <MenuItem path="/button" label="button" />
  //   </div>
  // );

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
          <img src={IMGKodigo} className="imgKodigo" alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active titulo" to={"/cellphones"}>
                  Celulares
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active titulo" to={"/videogames"}>
                  Videojuegos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Menu;
