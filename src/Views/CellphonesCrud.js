// import CrudTable from "../Components/CrudTable";
// import '..//Components/style/button.css';

// const CellphonesCrud = () => {
//   const cel = [
//     {
//       celularId: 0,
//       marca: "string",
//       modelo: "string",
//       color: "string",
//       precio: 0,
//       descripcion: "string",
//       operadora: "string",
//     },
//   ];
//   return (
//     <div className="menu">
//       <CrudTable
//         header={[
//           "Id",
//           "Marca",
//           "Modelo",
//           "Color",
//           "Precio",
//           "Descripcion",
//           "Operadora",
//         ]}
//         data={cel}
//         path={"/cellphones"}
//       />
//     </div>
//   );
// };

// export default CellphonesCrud;

import React, {useState, useEffect} from "react";
// import Tabla from "./Tabla";
import Tabla from "../Components/CrudTable";
import axios from "axios";
import "../Components/style/button.css";
import PreLoader1 from "../Components/PreLoader1";
import { useThemeContext } from '../Components/context/ThemeContext';


// api: donde voy a recibir la URL de la api de la entidad celular
function CelularCRUD({api}){
    const {contextTheme} = useThemeContext()  
    // El estado donde vamos a alojar los datos de todos los celular
    const[celular, setcelular] = useState()
    

    // Solo se ejecuta una vez cuando el componente es montado
    useEffect(() =>{
        cargarcelular()// Invoca la solicitud del metodo que devuelve los celular
    }, [])

    // Esta funcion es la encargada de hacer la solicitud GET a la API sobre los celular
    async function cargarcelular(){
        try{
            let res = await axios(api)// Solicitud de tipo GET hacia celular
            let data = await res.data// Convertimos el resultado en un array de objetos de tipo autor

            //console.log(data)
            setcelular(data)// El listado de los celular se envia al estado llamado celular
        }
        catch(error){
            alert(error)
            console.log(error)
        }
    }

    

    return(
        <div>
            <h1>Celulares, Modo {contextTheme} </h1>
            {
                celular === undefined ?
                    // <div>
                    //     <div className="spinner-border" role="status">
                    //         <span className="visually-hidden">Loading...</span>
                            
                    //     </div>
                    //     <h1>Cargando</h1>
                    // </div>
                    <div className="App">
                    <header className="App-header">
                    <h1>Cargando...</h1>
                      <PreLoader1 />
                    </header>
                  </div>
                :
                <Tabla controlador={"cellphones"} list={celular} cols={["Celular Id", "Marca", "Modelo", "Color", "Precio", "Descripción", "Operadora"]} />
            }
            
        </div>
    )
}

export default CelularCRUD



