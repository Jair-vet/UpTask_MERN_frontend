import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AuthLayout } from './layouts/AuthLayout'

import { Login } from './paginas/Login'
import { Registrar } from './paginas/Registrar'
import { OlvidePassword } from './paginas/OlvidePassword'
import { NuevoPassword } from './paginas/NuevoPassword'


function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path='registrar' element={<Registrar />} />
          <Route path='olvide-password' element={<OlvidePassword />} />
          <Route path='nuevo-password' element={<NuevoPassword />} />

        </Route>
        <Route path='/'>


        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
