import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { conexion } from '../Conexion'


const DataFetch = () => {

    const [data, setdata] = useState({ 
        expediente: '',
        nombre: '',
        apellidoP: '',
        apellidoM: '',
        correo: '',
        telefono: '',
        planEstudio: 'SOF18'
    })

    // show data updates
    useEffect(() => {
        console.log(data)
    }, [data])

    // show current conexion
    useEffect(() => {
        console.log(conexion)
    }, [])

    
    const handleClick = async e => {
        e.preventDefault()
        try {
            const info = data
            const result = await axios.post(conexion + '/insertStudent', info)
            console.log("Exito!!!!");
        } catch (err) {
            console.log(err);
        }
    }


  return (
    <div>
        <h1>Insert Data</h1>
        <form>
            <label>Expediente</label>
            <input type="number" name="expediente" onChange={e => setdata({...data, expediente: e.target.value})} />
            <br />
            <label>Nombre</label>
            <input type="text" name="nombre" onChange={e => setdata({...data, nombre: e.target.value})}/>
            <br />
            <label>Apellido Paterno</label>
            <input type="text" name="apellidoP" onChange={e => setdata({...data, apellidoP: e.target.value})}/>
            <br />
            <label>Apellido Materno</label>
            <input type="text" name="apellidoM" onChange={e => setdata({...data, apellidoM: e.target.value})}/>
            <br />
            <inpu>Correo</inpu>
            <input type="email" name="correo" onChange={e => setdata({...data, correo: e.target.value})}/>
            <br />
            <label>Telefono</label>
            <input type="number" name="telefono" onChange={e => setdata({...data, telefono: e.target.value})}/>
            <br />
            <label>Plan Estudio</label>
            <select name="planEstudio" onChange={e => setdata({...data, planEstudio: e.target.value})}>
                <option value="SOF18">SOF18</option>
            </select>
            <br />

            <input type='button' onClick={handleClick} value="Enviar" />



        </form>
    </div>
  )
}

export default DataFetch