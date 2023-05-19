import { useNavigate } from "react-router-dom"

export const SeleccionBeca = () => {

    const navigate = useNavigate();

    const handleClick = ({target}) => {
        navigate(target.value);
    }
    
    return (
        <>
            <h1>Seleccion de Beca</h1>
            <p>Esta es la ventana para seleccionar una beca</p>
            <button value={'/Menu'} onClick={ handleClick }>Ir a Menu Principal</button>
        </>
    )
}