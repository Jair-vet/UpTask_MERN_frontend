import { useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom'
import clienteAxios from '../config/clienteAxios'
import { Alerta } from '../components/Alerta'


export const NuevoPassword = () => {

  const [password, setPassword] = useState('')
  const [tokenValido, setTokenValido] = useState(false)
  const [alerta, setAlerta] = useState({})
  const [passwordModificado, setPasswordModificado] = useState(false)

  const params = useParams()
  const { token } = params

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await clienteAxios(`/usuarios/olvide-password/${token}`)
        setTokenValido(true)
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }
    }

    comprobarToken()
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()

    if(password.length < 6) {
      setAlerta({
          msg: 'El Password debe ser minimo de 6 caracteres',
          error: true
      })
      return
    }

    try {
      const url = `/usuarios/olvide-password/${token}`

      const { data } = await clienteAxios.post(url, { password })
      setAlerta({
          msg: data.msg,
          error: false
      })
      setPasswordModificado(true)
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
      <h1 className="text-center text-sky-600 font-black text-5xl capitalize">Reestablece tu password y no pierdas acceso a Tus
        <span className='text-slate-700'> Proyectos</span> 
      </h1>

      {msg && <Alerta alerta={alerta} />}

      { tokenValido && (
        <form 
          className='my-10  bg-gray-400 shadow-xl rounded-lg px-10 py-5'
          onSubmit={handleSubmit}
        >
          
          {/* Password */}
          <div className='mt-5'>
            <label 
              className='uppercase text-gray-600 block text-xl font-bold'
              htmlFor='password'
            >Nuevo Password</label>
            <input
              id='password'
              type='password'
              placeholder='Escribe tu Nuevo Password'
              className='w-full mt-1 p-2 border rounded-lg bg-gray-200'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <input 
            type='submit'
            value='Guardar Nuevo Password'
            className='bg-sky-700 w-full mt-10 py-3 text-white uppercase font-bold rounded 
              hover:cursor-pointer hover:bg-sky-900 transition-colors mb-5'
          />
        </form>
      )}

      {passwordModificado && (
          <Link 
              className='block text-center my-5 text-slate-500 uppercase text-sm'
              to="/"
          >Inicia Sesión</Link>
      )}

    </>
  ) 
}



