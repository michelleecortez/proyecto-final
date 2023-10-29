import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

// api: la url de endpoint de celular
// del: Contiene si el formulario se ha cargado para eliminar
function CelularFORM({api, del}){
    console.log("api",api)
    console.log("del", del)

    // Son estados asociados a los campos del formulario
    const[CelId, setCelId] = useState("")
    const[marca, setmarca] = useState("")
    const[modelo, setmodelo] = useState("")
    const[color, setcolor] = useState("")
    const[precio, setprecio] = useState("")
    const[descripcion, setdescripcion] = useState("")
    const[operadora, setoperadora] = useState("")

    // id: el parametro id recibido desde el CRUD
    const {id} = useParams()
    console.log("id", id)

    // navigate es el CelId con el cual voy a invocar a la funcion que haga la redirección
    const navigate = useNavigate()

    useEffect(() =>{
        console.log("termino el render")

        // Este if sirve para verificar si se deben cargar los datos en el fomrulario
        if(id !== undefined){
            cargarAutor()// Invoca a la funcion cargar autor
        }
    }, [])

    // La funcion encargada de cargar los datos del autor para los casos de editar y eliminar
    async function cargarAutor(){
        try{
            let res = await axios(api+"/"+id)// Solicitud GET con parametro ID
            let data = await res.data // Convierte el resultado a objeto 

            //console.log(data)

            // Los datos devueltos por la API se asignan a los respectivos estados
            // Para que en el formulario se carguen dichos datos
            setCelId(data.CelId)
            setmarca(data.marca)
            setmodelo(data.modelo)
            setcolor(data.color)
            setprecio(data.precio)
            setdescripcion(data.descripcion)
            setoperadora(data.operadora)
        }
        catch(error){
            console.log(error)

            // Verifica si el error es 404 lo que significa que el id del autor no existe
            if(error.response.status === 404){
                alert("El registro no existe")
                navigate("/cellphones")
            }
            else{
                alert(error)
                console.log(error)
            }
        }
    }

    // Funcion asincrona para guardar un nuevo registro
    async function guardar(){
        try{
            // Creación del objeto autor el cual posteriormente se le enviara a la API
            let autor = {
                CelId: CelId,
                marca: marca,
                modelo: modelo,
                color: color,
                precio: precio,
                descripcion: descripcion,
                operadora: operadora
            }

            // Solicitud POST hacia la API
            let res = await axios.post(api, autor)
            let data = await res.data// Convierte el resultado en objeto

            // Verifica si la API respondio en status con el valor de 1
            if(data.status === 1){
                alert(data.message)// Muestra el mensaje devuelto por la API
                navigate("/cellphones")// Redirecciona al componente donde se muestra la tabla de celular
            }
        }
        catch(error){
            alert(error)
            console.log(error)
        }
    }

    // Funcion encargada de editar el autor
    async function editar(){
        try{
            let autor = {
                Celid: id,
                marca: marca,
                modelo: modelo,
                color: color,
                precio: precio,
                descripcion: descripcion,
                operadora: operadora
            }
            
            // Se realiza una solicitud a la API de tipo PUT
            let res = await axios.put(api, autor)
            let data = await res.data// Convertimos la respuesta a objeto

            // Verificamos si la APi devolvio status 1
            if(data.status === 1){
                alert(data.message)// Mostramos el mensaje de la API
                navigate("/cellphones")// Redireccionamos a la tabla celular
            }
        }
        catch(error){
            // Verificamos si la api respondio que no existe
            if(error.response.status === 500){
                alert("El registro ya no existe")
                navigate("/cellphones")
            }
            else{
                // Si es otro tipo de error mostramos el detalle
                alert(error)
                console.log(error)
            }
        }
    }

    // Funcion se encarga de hacer la peticion de tipo DELETe hacia la API
    async function eliminar(){
        try{
            let res = await axios.delete(api+"?id="+id)// Se solicita DELETE
            let data = await res.data// Convertimos el resultado de la API en un objeto


            // Verificamos si la API a devuelto el estado de que fue eliminado
            if(data.status === 1){
                alert(data.message)// Mostramos el mensaje devuelto por la API
                navigate("/cellphones")// Redireccionamos hacia la tabla principal de celular
            }

        }
        catch(error){
            // Verificamos si no existe el id a eliminar
            if(error.response.status === 404){
                alert("El autor ya no existe")// Mostramos mensaje de que no existe
                navigate("/cellphones")// Redireccionamos hacia la tabla principal de celular
            }
            else{
                // Si es otro tipo de error ingresa aqui
                alert(error)
                console.log(error)
            }
        }
    }

    // Esta funciones es invocada por el boton guardar, editar o eliminar
    function enviar(e){

        // Detiene la propagacion del evento submit generada por defacto en el button dado que este se encuentra dentro de un formulario
        e.preventDefault()
        e.stopPropagation()

        // Seleccionamos el formulario el cual tiene la clase needs-validation
        let form = document.querySelector(".needs-validation")

        // Verificamos si el formulario es invalido
        if (!form.checkValidity()){
            // Si es invalido agregamos el estilo de la validacion (invalid-feedback)
            form.classList.add('was-validated')
        }
        else{
            // Significa que el formulario tiene todos los campos completos
            // Por  lo cual procedemos a ejecutar la acción (guardar, editar, eliminar)
            if(id === undefined)// Si el id es undefined significa que es un nuevo registro
                guardar()// Invoca a la funcion guardar
            else if(del === undefined)// Si del es undefined significa que se desea editar
                editar()
            else{// Se desea eliminar
                let respuesta = window.confirm("Esta seguro que desea eliminar?")// Solicitamos confirmacion del usuario
                if(respuesta === true)// Verificamos la respuesta
                    eliminar()// Si la respuesta es true entonces invocamos a eliminar
            }
        }
        

    }

    return(
        <div>
            <form className="needs-validation" noValidate>

                {
                    // Se verifica que el id sea diferente de undefined
                    // Si esto es cierto significa que se va editar o eliminar el registro
                    // Por  lo cual mostrar el campor autor id
                    id !== undefined ?
                        <div className="form-group mt-3">
                            <label className="form-label">Celular ID:</label>
                            <input className="form-control" type="text" value={id} readOnly disabled />
                        </div>
                    :
                        ""
                }
{/* 
                <div className="form-group mt-3">
                    <label className="form-label">Celular Id:</label>
                    <input type="text" className="form-control" value={CelId} onChange={(e) => setCelId(e.target.value)} disabled={del===undefined ? false : true} required />
                    <div className="valid-feedback">OK</div>
                    <div className="invalid-feedback">Campo requerido</div>
                </div> */}
                <div className="form-group mt-3">
                    <label className="form-label">Marca:</label>
                    <input type="text" className="form-control" onChange={(e) => setmarca(e.target.value)} value={marca} disabled={del===true ? true: false} required />
                    <div className="valid-feedback">OK</div>
                    <div className="invalid-feedback">Campo requerido</div>
                </div>
                <div className="form-group mt-3">
                    <label className="form-label">Modelo:</label>
                    <input type="text" className="form-control" value={modelo} onChange={(e) => setmodelo(e.target.value)} disabled={del === true ? true : false} required />
                    <div className="valid-feedback">OK</div>
                    <div className="invalid-feedback">Campo requerido</div>
                </div>


                <div className="form-group mt-3">
                    <label className="form-label">Color:</label>
                    <input type="text" className="form-control" value={color} onChange={(e) => setcolor(e.target.value)} disabled={del===undefined ? false : true} required />
                    <div className="valid-feedback">OK</div>
                    <div className="invalid-feedback">Campo requerido</div>
                </div>
                <div className="form-group mt-3">
                    <label className="form-label">Precio:</label>
                    <input type="number" className="form-control" onChange={(e) => setprecio(e.target.value)} value={precio} disabled={del===true ? true: false} required />
                    <div className="valid-feedback">OK</div>
                    <div className="invalid-feedback">Campo requerido</div>
                </div>
                <div className="form-group mt-3">
                    <label className="form-label">Descripción:</label>
                    <input type="text" className="form-control" value={descripcion} onChange={(e) => setdescripcion(e.target.value)} disabled={del === true ? true : false} required />
                    <div className="valid-feedback">OK</div>
                    <div className="invalid-feedback">Campo requerido</div>
                </div>
                <div className="form-group mt-3">
                    <label className="form-label">Operadora:</label>
                    <input type="text" className="form-control" value={operadora} onChange={(e) => setoperadora(e.target.value)} disabled={del === true ? true : false} required />
                    <div className="valid-feedback">OK</div>
                    <div className="invalid-feedback">Campo requerido</div>
                </div>


                <button className={`btn btn-${(id === undefined ? "success" : del===undefined ? "primary" : "danger")}`} onClick={(e) => enviar(e)}><i className={id === undefined ? "fa-solid fa-floppy-disk" : del===true ? "fa-solid fa-trash" : "fa-solid fa-pen-to-square"}></i> {id === undefined ? "Guardar" : del === undefined ? "Editar" : "Eliminar"}</button>
                <button className="btn btn-warning" onClick={() => navigate("/cellphones")}><i className="fa-solid fa-xmark"></i> Cancelar</button>
            </form>
        </div>
    )
}

export default CelularFORM