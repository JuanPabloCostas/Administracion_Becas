import React, { useState } from 'react'
import logoUAQ from '../assets/logouaq.svg'
import cerrar from '../assets/cruz.svg'
import './RegistrarUsuarioCSS.css'
import { useNavigate } from "react-router-dom"
import { FormularioRegistro } from '../components/FormularioRegistro'
import { RegistroExitoso } from '../components/RegistroExitoso'


export const RegistarUsuario = () => {

    const navigate = useNavigate();

    const [esVisible, setEsVisible] = useState(false)

    const cambiarVisibilidad = () => {
        setEsVisible(!esVisible)
    }

    const handleClick = ({target}) => {
        // console.log(event)
        navigate(target.title);
    }
    
    return (
        <>
            <div className='container'>
                <div className='upper'>
                    
                    <img id='contenedorImagenUaq' src={ logoUAQ } alt="" title={'/Menu'} onClick={ handleClick }/>
                    
                    <p id='titleForm'>Registro</p>

                    <img id='cerrarImagen' src={ cerrar } alt="" title={'/Menu'} onClick={ handleClick } />
                </div>

                <FormularioRegistro
                visiblidad = { cambiarVisibilidad }
                />

                {esVisible && <RegistroExitoso
                 visiblidad = { cambiarVisibilidad }
                 />}

                
                
            </div>
            
            {/* <h1>Registrar Usuario</h1>
            <p>Esta es la ventana para registrar un usuario</p>
            <button title={'/Menu'} onClick={ handleClick }>Ir a Menu Principal</button> */}
        </>
    )
}