// import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import { RegistarUsuario } from './RegistroDeUsuario/RegistrarUsuario'
import { Menu } from './Menu'
import { SeleccionBeca } from './SeleccionDeBeca/SeleccionBeca'
import { VisualizacionBecasEstudiante } from './VisualizacionBecasEstudiante/VisualizacionBecasEstudiante'
import { Recuperar } from './Recuperar/Recuperar'
import { Ingresar } from './Ingresar/Ingresar'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Router>
          <div>
            <Routes>
              <Route exact path="/" element={<Menu/>}/>
              
              <Route exact path="/Menu" element={<Menu/>}/>
              <Route exact path="/RegistrarUsuario" element={<RegistarUsuario/>}/>
              <Route exact path="/SeleccionBeca" element={<SeleccionBeca/>}/>
              <Route exact path="/VisualizacionBecasEstudiante" element={<VisualizacionBecasEstudiante/>}/>
              <Route exact path="/Recuperar" element={<Recuperar/>}/>
              <Route exact path="/Ingresar" element={<Ingresar/>}/>

              <Route render={() => <h1>Not found!</h1>} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  )
}

export default App
