import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className="col-2 bg-primary ">
      <MenuItem path="/" label="Inicio de pagina" />
      <MenuItem path="/Ejemplo" label="Inicio de pagina" />
      <MenuItem path="/cellphones" label="Celulares" />
      <MenuItem path="/videogames" label="Juegos" />
    </div>
  );
};
export default Menu;
