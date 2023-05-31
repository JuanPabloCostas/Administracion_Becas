import React from "react";
import './Recuperar.css';
import logoUAQ from '../assets/logouaq.svg'
import { useNavigate } from "react-router-dom";

export const Recuperar = () => {
    const navigate = useNavigate();

    const handleClick = ({target}) => {
        navigate(target.value);
    }

    return (
        <>
            <div className="login">
            <img className="img-login" src={logoUAQ} alt="Logo-UAQ"/>
            <h1>Recuperar contraseña</h1>
            <div className="left-label">
                <p>Nueva contraseña</p>
            </div>
            <input type="password" id="newPassword"/>
            <div className="left-label">
                <p>Repetir contraseña</p>
            </div>
            <input type="password" id="repeatPassword"/>
            <button>Actualizar contraseña</button>
            </div>
        <img className="img-background"src={logoUAQ} alt="Logo UAQ"/>
        </>
    )
}