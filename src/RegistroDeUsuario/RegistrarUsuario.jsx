import { useNavigate } from "react-router-dom"

export const RegistarUsuario = () => {

    const navigate = useNavigate();

    const handleClick = ({target}) => {
        navigate(target.value);
    }
    
    return (
        <>
            <h1>Registrar Usuario</h1>
            <p>Esta es la ventana para registrar un usuario</p>
            <button value={'/Menu'} onClick={ handleClick }>Ir a Menu Principal</button>
        </>
    )
}