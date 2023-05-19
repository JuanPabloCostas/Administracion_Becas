
import { useNavigate } from "react-router-dom";

export const Menu = () => {

    const navigate = useNavigate();
    

    const handleClick = ({target}) => {
        navigate(target.value);
    }
    
    return (
        <>
            <h1>Este es el menu</h1>
            <p>Este es el menu de navegacion</p>
            <button value={'/Menu'} onClick={ handleClick }>Ir a Menu Principal</button>
            <button value={'/RegistrarUsuario'} onClick={ handleClick }>Ir a Registrar Usuario</button>
            <button value={'/SeleccionBeca'} onClick={ handleClick }>Ir a Seleccion Beca</button>
        </>
    )
}