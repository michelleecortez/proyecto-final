import CrudTable from "./CrudTable";

const CellphonesCrud = () => {
  const cel = [
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
    <div>
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
        data={cel}
        path={"/cellphones"}
      />
    </div>
  );
};

export default CellphonesCrud;
