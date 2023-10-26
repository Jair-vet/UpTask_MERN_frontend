import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import clienteAxios from '../config/clienteAxios'
import { Alerta } from '../components/Alerta'


export const ConfirmarCuenta = () => {

  const [alerta, setAlerta] = useState({})
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false)

  const params = useParams();
  const { id } = params

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
          const url = `/usuarios/confirmar/${id}`
          const { data } = await clienteAxios(url)

          setAlerta({
            msg: data.msg,
            error: false
          })
          setCuentaConfirmada(true)

      } catch (error) {
          setAlerta({
            msg: error.response.data.msg,
            error: true
          })
      }
    }
    confirmarCuenta();
  }, [])

  const { msg } = alerta


  return (
    <>
      <h1 className="text-center text-sky-600 font-black text-5xl capitalize">Confirm your account and start creating yours
        <span className='text-slate-700'> Projects</span> 
      </h1>

      <div className='mt-20 md:mt-10 shadow-lg px-5 py-10 rounded-lg bg-white'>
        { msg && <Alerta alerta={alerta} /> }

        {cuentaConfirmada && (
          <div className='flex md:flex-row justify-center my-5'>
            <Link 
              className='block text-center md:my-0 my-2 text-slate-500 uppercase text-sm underline'
              to="/"
            > Log In</Link>
          </div>
        )}
      </div> 

    </>
  )
}
