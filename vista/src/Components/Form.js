import React from 'react';
//esta funcion modifica el estado de una entrada de la libreta cuando se detecta un cambio en el formulario (evento)
const Form = ({entrada, setEntrada}) => {

    const handleChange = e => {
        setEntrada({
            ...entrada,
            [e.target.name]: e.target.value
        })
    }

    let{nombres, apellidos, correo, telefonos, celular, direccion, ciudad} = entrada

    const handleSubmit = () => {
        telefonos= parseInt(telefonos, 10)
        celular= parseInt(celular, 10)
        //validación de los datos
        if (nombres === '' || apellidos === '' || correo === '' || direccion === '' || ciudad === '' || telefonos <= 0 || celular <= 0 ) {
            alert('Todos los campos son obligatorios')
            return
        }

        //consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(entrada)
        }
        fetch('http://localhost:8000/api/usuarios', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //deja en blanco el state luego de que se hayan agregado los datos
        setEntrada({
            nombres: '',
            apellidos: '',
            correo: '',
            telefonos: 0,
            celular: 0,
            direccion: '',
            ciudad: ''
        })



    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nombresId" className="form-label">Nombres</label>
                <input value={nombres} name="nombres" onChange={handleChange} type="text" id="nombresId" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="apellidosId" className="form-label">Apellidos</label>
                <input value={apellidos} name="apellidos" onChange={handleChange} type="text" id="apellidosId" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="correoId" className="form-label">Correo</label>
                <input value={correo} name="correo" onChange={handleChange} type="text" id="correoId" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="telefonosId" className="form-label">Telefonos</label>
                <input value={telefonos}  name="telefonos" onChange={handleChange} type="number" id="telefonosId" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="celularId" className="form-label">Celular</label>
                <input value={celular}  name="celular" onChange={handleChange} type="number" id="celularId" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="direccionId" className="form-label">Direccion</label>
                <input value={direccion} name="direccion" onChange={handleChange} type="text" id="direccionId" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="ciudadId" className="form-label">Ciudad</label>
                <input value={ciudad} name="ciudad" onChange={handleChange} type="text" id="ciudadId" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    );
}
 
export default Form;