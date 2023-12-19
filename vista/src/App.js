import React, {Fragment,useState,useEffect} from 'react'
import Navbar from './Components/Navbar'
import Tabla from './Components/Tabla'
import Form from './Components/Form'
import './App.css';

function App() {

  //inicializacion de un unico libro, pra guardar los datos que vienen del html
  const [entrada,setEntrada] = useState({
    nombres: '',
    apellidos: '',
    correo: '',
    telefonos: 0,
    celular: 0,
    direccion: '',
    ciudad: ''
  })

  //sirve para listar las entradas de la libreta usando estados 
  const [entradas,setEntradas] = useState([])

  //estado para actualizar la tabla en tiempo real, si no se ha actualizado queda en false, de lo contrario pasa a true
  const [listUpdated, setListUpdated] = useState(false)

  //este metodo se usa cuando la aplicacion se carga y obtiene la lista de entradas de la libreta,
  //hace la consulta HTTP y la formatea en JSON
  useEffect(()=>{
    const getEntradas = () =>{
      fetch('http://localhost:8000/api/usuarios')
      .then(res => res.json())
      .then(res => setEntradas(res))
    }
    getEntradas()
    setListUpdated(false)
    //cuando se actualiza el estado de listUpdated (true), se ejecuta el useEffect para que se refresque toda la lista de contactos
    //y posteriormente vuelve y se deja en false
  },[listUpdated])

  return (
    <Fragment>
      <Navbar brand='Libreta de contactos'/>
      <div className="container">
        <div className= "row">
          <div className= "col-sm">
            <h2 style={{textAlign:"center"}}>Contactos</h2>
            <Tabla entrada={entrada}  entradas = {entradas} setListUpdated={setListUpdated} />

          </div>
          <div className="col-sm">
            <h2 style={{textAlign:"center"}}>Agregar</h2>
            <Form entrada={entrada} setEntrada={setEntrada}/>
          </div>

        </div>


      </div>

    </Fragment>
  );
}

export default App;
