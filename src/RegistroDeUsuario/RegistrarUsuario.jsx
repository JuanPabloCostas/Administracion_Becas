import React from 'react'
import logoUAQ from '../assets/logouaq.svg'
import cerrar from '../assets/cruz.svg'
import './RegistrarUsuarioCSS.css'
import { useNavigate } from "react-router-dom"


export const RegistarUsuario = () => {

    const navigate = useNavigate();

    const handleClick = ({target}) => {
        navigate(target.value);
    }
    
    return (
        <>
            <div className='container'>
                <div className='upper'>
                    
                    <img id='contenedorImagenUaq' src={ logoUAQ } alt="" />
                    
                    <p id='titleForm'>Registrate</p>

                    <img id='cerrarImagen' src={ cerrar } alt="" />
                </div>
                <form action="post">
                <div className='center'>
                    <div className='almacenamiento'>
                        <div className='renglon'>
                            <div className='almacen'>
                                <p>Hola</p>
                                <input type="text" />
                            </div>
                            <div className='almacen'>
                                <p>Hola</p>
                                <input type="text" />
                            </div>
                            <div className='almacen'>
                                <p>Hola</p>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='renglon'>
                            <div className='almacen'>
                                <p>Hola</p>
                                <input type="text" />
                            </div>
                            <div className='almacen'>
                                <p>Hola</p>
                                <input type="text" />
                            </div>
                            <div className='almacen'>
                                <p>Hola</p>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='down'>
                    <div className='botonContainer'>
                        <input type="button" value="Registar"/>
                    </div>
                </div>
                </form>
            </div>
            
            {/* <h1>Registrar Usuario</h1>
            <p>Esta es la ventana para registrar un usuario</p>
            <button value={'/Menu'} onClick={ handleClick }>Ir a Menu Principal</button> */}
        </>
    )
}