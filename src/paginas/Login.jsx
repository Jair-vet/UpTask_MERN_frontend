import { useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import clienteAxios from '../config/clienteAxios'
import useAuth from '../hooks/useAuth';
import { Alerta } from '../components/Alerta'

export const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alerta, setAlerta] = useState({})

  const { auth, setAuth, cargando } = useAuth();

  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()

    if([email, password].includes('')) {
      setAlerta({
          msg: 'Todos los campos son obligatorios',
          error: true
      });
      return
    }

    try {
      const { data } = await clienteAxios.post('/usuarios/login', { email, password})
      setAlerta({})
      localStorage.setItem('token', data.token) // Almacenar en el LocalStorage
      setAuth(data)
      navigate('/proyectos')

    } catch (error) {
        setAlerta({
            msg: error.response.data.msg,
            error: true
        })
    }

  }

  const { msg } = alerta

  return (
    <>
      <h1 className="text-center text-sky-600 font-black text-5xl capitalize">Log In and Manage yours
        <span className='text-slate-700'> Projects</span> 
      </h1>

      {msg && <Alerta alerta={alerta } />}

      <form 
        className='my-10  bg-gray-400 shadow-xl rounded-lg px-10 py-5'
        onSubmit={handleSubmit}
      >
        <div>
          <label 
            className='uppercase text-gray-600 block text-xl font-bold'
            htmlFor='email'
          >Email</label>
          <input
            id='email'
            type='email'
            placeholder='Type your Email'
            className='w-full mt-1 p-2 border rounded-lg bg-gray-200'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className='mt-5'>
          <label 
            className='uppercase text-gray-600 block text-xl font-bold'
            htmlFor='password'
          >Password</label>
          <input
            id='password'
            type='password'
            placeholder='Type your Password'
            className='w-full mt-1 p-2 border rounded-lg bg-gray-200'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <input 
          type='submit'
          value='Log In'
          className='bg-sky-700 w-full mt-10 py-3 text-white uppercase font-bold rounded 
            hover:cursor-pointer hover:bg-sky-900 transition-colors mb-5'
        />
      </form>

      <nav className="lg:flex lg:justify-between">
        {/* Registrarse en la App */}
        <div className='flex md:flex-row justify-center my-5'>
          <p className='block text-center md:my-0 my-2 text-slate-900 uppercase text-sm mr-2'>You don't have an account?</p>
          <Link 
            className='block text-center md:my-0 my-2 text-slate-500 uppercase text-sm underline'
            to="registrar"
          > Sign Up</Link>
        </div>

        {/* Olvide Passsword */}
        <Link 
          className='block text-center my-5 text-slate-500 uppercase text-sm underline'
          to="olvide-password"
        > Forgot your Password</Link>
      </nav>

    </>
  )
}
