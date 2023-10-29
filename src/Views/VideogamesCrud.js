import CrudTable from "../Components/CrudTable";
import '../Components/style/button.css';


const VideogamesCrud = () => {
 
  const juego = [
    {
      celularId: 0,
      marca: "string",
      modelo: "string",
      color: "string",
      precio: 0,
      descripcion: "string",
      operadora: "string",
    },
  ];
  return (
    <div className="menu">
      <CrudTable
        header={[
          "Id",
          "Marca",
          "Modelo",
          "Color",
          "Precio",
          "Descripcion",
          "Operadora",
        ]}
        data={juego}
        path={"/cellphones"}
      />
    </div>
  );
};

export default VideogamesCrud;

