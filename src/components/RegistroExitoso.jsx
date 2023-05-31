import cerrar from "../assets/cruz.svg";
import cara from "../assets/cara_feliz.svg"
import { useNavigate } from "react-router-dom";

export const RegistroExitoso = ( {visiblidad} ) => {

    const navigate = useNavigate();

    const handleClick = ({target}) => {
        // console.log(event)
        navigate(target.title);
    }

    return(
        <>
        <div className="registroExitoso">
            <img onClick={ visiblidad } src={cerrar} alt="" className="cerrar" />
            <img src={cara} alt="" className="feliz" />
            <p>Registro exitoso</p>
            <input title="/menu" onClick={ handleClick } type="button" value="Ir a Iniciar Sesión"/>
        </div>
        <div className="ventanaNegra" onClick={ visiblidad }>
            
        </div>
            
        </>
    )
}