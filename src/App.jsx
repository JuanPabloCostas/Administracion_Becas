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

              <Route render={() => <h1>Not found!</h1>} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  )
}

export default App
