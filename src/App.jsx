import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AuthLayout } from './layouts/AuthLayout'

import { Login } from './paginas/Login'
import { Registrar } from './paginas/Registrar'
import { OlvidePassword } from './paginas/OlvidePassword'
import { NuevoPassword } from './paginas/NuevoPassword'
import { ConfirmarCuenta } from './paginas/ConfirmarCuenta'
import { AuthProvider } from './context/AuthProvider'
import { Proyectos } from './paginas/Proyectos'
import { RutaProtegida } from './layouts/RutaProtegida'
import { NuevoProyecto } from './paginas/NuevoProyecto'
import { ProyectosProvider } from './context/ProyectosProvider'
import { Proyecto } from './paginas/Proyecto'


function App() {
 
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProyectosProvider>
          <Routes>
            <Route path='/' element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path='registrar' element={<Registrar />} />
              <Route path='olvide-password' element={<OlvidePassword />} />
              <Route path='olvide-password/:token' element={<NuevoPassword />} />
              <Route path='confirmar/:id' element={<ConfirmarCuenta />} />

            </Route>
            {/* el usuario este Autenticado */}
            <Route path='/proyectos' element={<RutaProtegida />}>
              <Route index element={<Proyectos />} />
              <Route path="crear-proyecto" element={<NuevoProyecto />} />
              <Route path=":id" element={<Proyecto />} />
            </Route>
          </Routes>
        </ProyectosProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
