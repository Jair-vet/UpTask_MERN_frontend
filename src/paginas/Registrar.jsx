import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Alerta } from '../components/Alerta'
import axios from 'axios'


export const Registrar = () => {

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repetirPassword, setRepetirPassword] = useState('')
  const [alerta, setAlerta] = useState({})

  const handleSubmit = async e => {
    e.preventDefault()

    if([nombre, email, password, repetirPassword].includes('')){
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      setTimeout(() => {
        setAlerta({})
      }, 3000)
      return
    }

    if( password.length < 6 ){
      setAlerta({
        msg: 'el password es muy corto, agrega minimo 6 caracteres',
        error: true
      })
      setTimeout(() => {
        setAlerta({})
      }, 3000)
      return
    }

    if( password !== repetirPassword ){
      setAlerta({
        msg: 'Los password no son iguales',
        error: true
      })
      setTimeout(() => {
        setAlerta({})
      }, 3000)
      return
    }

    // Crear el usuario en la API
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/usuarios`, 
      {nombre, email, password} )
      
      setAlerta({
        msg: data.msg,
        error: false
      })
      setTimeout(() => {
        setAlerta({})
      }, 3000)

      // Regresar las celdas a su estado original
      setNombre('')
      setEmail('')
      setPassword('')
      setRepetirPassword('')

    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
      setTimeout(() => {
        setAlerta({})
      }, 3000)
    }

  }

  const { msg } = alerta

  return (
    <>
      <h1 className="text-center text-sky-600 font-black text-5xl capitalize">Create your Account and manage your
        <span className='text-slate-700'> Projects</span> 
      </h1>

      { msg && <Alerta alerta={alerta} /> }

      <form 
        onSubmit={handleSubmit}
        className='my-10  bg-gray-400 shadow-xl rounded-lg px-10 py-5'
      >
        
        {/* Nombre */}
        <div>
          <label 
            className='uppercase text-gray-600 block text-xl font-bold'
            htmlFor='nombre'
          >Name</label>
          <input
            id='nombre'
            type='text'
            placeholder='Name'
            className='w-full mt-1 p-2 border rounded-lg bg-gray-200'
            value={ nombre }
            onChange={ e => setNombre(e.target.value) }
          />
        </div>
        {/* Email */}
        <div className='mt-5'>
          <label 
            className='uppercase text-gray-600 block text-xl font-bold'
            htmlFor='email'
          >Email</label>
          <input
            id='email'
            type='email'
            placeholder='Email'
            className='w-full mt-1 p-2 border rounded-lg bg-gray-200'
            value={ email }
            onChange={ e => setEmail(e.target.value) }
          />
        </div>
        {/* Password */}
        <div className='mt-5'>
          <label 
            className='uppercase text-gray-600 block text-xl font-bold'
            htmlFor='password'
          >Password</label>
          <input
            id='password'
            type='password'
            placeholder='Password'
            className='w-full mt-1 p-2 border rounded-lg bg-gray-200'
            value={ password }
            onChange={ e => setPassword(e.target.value) }
          />
        </div>
        {/* Confirmar Password */}
        <div className='mt-5'>
          <label 
            className='uppercase text-gray-600 block text-xl font-bold'
            htmlFor='password2'
          >Confirm Password</label>
          <input
            id='password2'
            type='password'
            placeholder='Confirm Password'
            className='w-full mt-1 p-2 border rounded-lg bg-gray-200'
            value={ repetirPassword }
            onChange={ e => setRepetirPassword(e.target.value) }
          />
        </div>

        <input 
          type='submit'
          value='Create Account'
          className='bg-sky-700 w-full mt-10 py-3 text-white uppercase font-bold rounded 
            hover:cursor-pointer hover:bg-sky-900 transition-colors mb-5'
        />
      </form>

      <nav className="lg:flex lg:justify-between">
        {/* Iniciar Sesión */}
        <div className='flex md:flex-row justify-center my-5'>
          <p className='block text-center md:my-0 my-2 text-slate-900 uppercase text-sm mr-2'>You Have an account?</p>
          <Link 
            className='block text-center md:my-0 my-2 text-slate-500 uppercase text-sm underline'
            to="/"
          > Log In</Link>
        </div>

        {/* Olvide Passsword */}
        <Link 
          className='block text-center my-5 text-slate-500 uppercase text-sm underline'
          to="/olvide-password"
        > Forgot Password</Link>
      </nav>

    </>
  )
}
