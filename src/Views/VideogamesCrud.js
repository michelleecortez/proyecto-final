import CrudTable from "../Components/CrudTable";
import { useState,useEffect } from "react";
import axios from "axios";
const VideogamesCrud = () => { 
  const [ Videogames, setVideogames ] = useState ([])
  const getVideogames = () => { 
    axios.get("https://denny2023.azurewebsites.net/api/juegos").then(res => setVideogames(res.data)) 
  }
  const postVideogames = async () => {
    //Solicitud post hacia la Api 
    let res = await axios.post("https://denny2023.azurewebsites.net/api/juegos",newVideogames)
  }
  let newVideogames = {
  "titulo": "string",
  "descripcion": "string",
  "plataforma": "string",
  "precio": 0,
  "categoria": "string"
  }
  const putVideogames = async () => {
    let res = await axios.put("https://denny2023.azurewebsites.net/api/juegos", editVideogames)
  }
  let editVideogames = {
    "juegoId": 192,
    "titulo": "sdsd",
    "descripcion": "nxsio",
    "plataforma": "nlkl",
    "precio": 40,
    "categoria": "mlkjl",
  }
  const deleteVideogames = async () => {
    let res = await axios.delete("https://denny2023.azurewebsites.net/api/juegos?id=222")
    let data = await res.data
    console.log(data)
  } 
  
  useEffect(() => { deleteVideogames()}, [])

return (
  <div>

    <CrudTable
      header={[
        "Id",
        "Título",
        "Descripcion",
        "Plataforma",
        "Precio",
        "Categoria",
      ]}
      data={Videogames}
      path={"/Videogames"} 
    /> 
  </div>
);
};

export default VideogamesCrud;