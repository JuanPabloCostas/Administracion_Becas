import { useEffect, useState } from "react"
import { VerificarContraseña } from "./VerificarContraseña"
import ojoAbierto from "../assets/ojo_abierto.svg"
import ojoCerrado from "../assets/ojo_cerrado.svg"

export const FormularioRegistro = ( {visiblidad} ) => {

    const [valoresContraseña, setValoresContraseña] = useState('')

    const [valoresContraseña2, setValoresContraseña2] = useState('')

    const [mostrarContraseña, setMostrarContraseña] = useState(false)

    const [mostrarContraseña2, setMostrarContraseña2] = useState(false)

    const [ojo, setOjo] = useState(ojoCerrado)

    useEffect(() => {
        setOjo(mostrarContraseña ? ojoAbierto : ojoCerrado)
    
      
    }, [mostrarContraseña])
    

    
    const cambiarContraseña = () => {
        setMostrarContraseña(!mostrarContraseña)
        
    }
    

    const onInputChange = ({ target }) => {
        setValoresContraseña(target.value.trim())
    }

    const onInputChange2 = ({ target }) => {
        setValoresContraseña2(target.value.trim())
    }


    return(
        <form action="post">
            <div className='center'>
                <div className='almacenamiento'>
                    <div className='renglon'>
                        <div className='almacen'>
                            <p>Correo</p>
                            <input placeholder="@mail.com" className="inputText" type="text" />
                        </div>
                        <div className='almacen'>
                            <p>Contraseña</p>
                            <input placeholder="Tu Contraseña" className="inputText" type={mostrarContraseña ? 'text' : 'password'} onChange={ onInputChange } />
                            <img src={ ojo } 
                            onClick={ cambiarContraseña } alt="" />
                        </div>
                        <div className='almacen'>
                            <p>Confirmar Contraseña</p>
                            <input placeholder="Tu Contraseña" className="inputText" type={mostrarContraseña2 ? 'text' : 'password'} onChange={ onInputChange2 } />
                            {(valoresContraseña !== valoresContraseña2 && (valoresContraseña2.length > 2)) && <VerificarContraseña />}
                        </div>
                    </div>
                    <div className='renglon'>
                        <div className='almacen'>
                            <p>Expediente</p>
                            <input placeholder="000000" className="inputText" type="text" />
                        </div>
                        <div className='almacen'>
                            <p>Nombre</p>
                            <input placeholder="Tu Nombre" className="inputText" type="text" />
                        </div>
                        <div className='almacen'>
                            <p>Apellidos</p>
                            <input placeholder="Tus Apellidos" className="inputText" type="text" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='down'>
                <div className='botonContainer'>
                    <input type="button" value="Registrar" onClick={ visiblidad }/>
                </div>
            </div>
        </form>
    )
}