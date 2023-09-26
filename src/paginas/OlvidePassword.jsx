import { useState } from 'react'
import { Link } from 'react-router-dom'
import clienteAxios from '../config/clienteAxios'
import { Alerta } from '../components/Alerta'


export const OlvidePassword = () => {

  const [email, setEmail] = useState('')
  const [alerta, setAlerta] = useState({})

  const handleSubmit = async e => {
    e.preventDefault();
    
    if(email === '' || email.length < 6) {
      setAlerta({
          msg: 'El Email es obligatorio',
          error: true
      });
      return
    }

    try {
      const { data } = await clienteAxios.post(`/usuarios/olvide-password`, { email })

      setAlerta({
          msg: data.msg,
          error: false
      })
        
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
      <h1 className="text-center text-sky-600 font-black text-5xl capitalize">Recuperar tu acceso y no pierdas tus
        <span className='text-slate-700'> Proyectos</span> 
      </h1>

      { msg && <Alerta alerta={alerta} />}

      <form 
        className='my-10  bg-gray-400 shadow-xl rounded-lg px-10 py-5'
        onSubmit={handleSubmit}
      >
        {/* Email */}
        <div className='mt-5'>
          <label 
            className='uppercase text-gray-600 block text-xl font-bold'
            htmlFor='email'
          >Email</label>
          <input
            id='email'
            type='email'
            placeholder='Email de Registro'
            className='w-full mt-1 p-2 border rounded-lg bg-gray-200'
            value={email}
            onChange={ e => setEmail(e.target.value)}
          />
        </div>
        

        <input 
          type='submit'
          value='Enviar Instrucciones'
          className='bg-sky-700 w-full mt-10 py-3 text-white uppercase font-bold rounded 
            hover:cursor-pointer hover:bg-sky-900 transition-colors mb-5'
        />
      </form>

      <nav className="lg:flex lg:justify-between">
        {/* Registrarse en la App */}
        <div className='flex md:flex-row justify-center my-5'>
          <p className='block text-center md:my-0 my-2 text-slate-900 uppercase text-sm mr-2'>¿No tienes una Cuenta?</p>
          <Link 
            className='block text-center md:my-0 my-2 text-slate-500 uppercase text-sm underline'
            to="/registrar"
          > Regístrate</Link>
        </div>

        {/* Iniciar Sesión */}
        <Link 
          className='block text-center my-5 text-slate-500 uppercase text-sm underline'
          to="/"
        > Iniciar Sesión</Link>
      </nav>

    </>
  )
}
 