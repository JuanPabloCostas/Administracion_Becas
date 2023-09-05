
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
            <button value={'/RegistrarUsuario'} onClick={ handleClick }>Ir a Registrar Usuario</button>
            <button value={'/SeleccionBeca'} onClick={ handleClick }>Ir a Seleccion Beca</button>
            <button value={'/VisualizacionBecasEstudiante'} onClick={ handleClick }>Ver Beca Estudiante</button>
            <button value={'/Recuperar'} onClick={ handleClick }>Ir a recuperar</button>
            <button value={'/Ingresar'} onClick={ handleClick }>Ir a ingresar</button>
            <button value={'/DataFetch'} onClick={ handleClick }>Ir a DataFetch</button>
        </>
    )
}