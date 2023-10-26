import { useEffect } from 'react'
import useProyectos from '../hooks/useProyectos';
import { useParams } from 'react-router-dom'
import { Alerta } from '../components/Alerta';
import { FormularioColaborador } from '../components/FormularioColaborador';


export const NuevoColaborador = () => {

  const { obtenerProyecto, proyecto, cargando, colaborador, agregarColaborador, alerta } = useProyectos()
  const params = useParams()

  useEffect(() => {
    obtenerProyecto(params.id)
  }, []);


  if(!proyecto?._id) return <Alerta alerta={alerta} />

  return (
    <>
      <h1 className="text-4xl font-black">Add Collaborator to the Project: <p className="text-3xl mt-2 text-gray-500 font-extrabold uppercase">{proyecto.nombre}</p> </h1>

      <div className="mt-10 flex justify-center">
        <FormularioColaborador />
      </div>


      {cargando ? <p className="text-center">load...</p> : colaborador?._id && (
        <div className='flex justify-center mt-10'>
            <div className='bg-white py-10 px-5 md:w-1/2 rounded-lg shadow w-full'>
                <h2 className="text-3xl mb-5 text-center text-gray-400 font-extrabold uppercase">Results</h2>

                <div className='flex justify-between items-center'>
                  <p className='text-xl font-extrabold text-gray-500'>{colaborador.nombre}</p>

                  <button
                    type="button"
                    className='bg-slate-500 duration-300 hover:bg-emerald-600 px-5 py-2 rounded-lg uppercase text-white font-bold text-sm'
                    onClick={() => agregarColaborador({
                      email: colaborador.email
                    })}
                  >add Collaborator</button>
                </div>
            </div>
        </div>
      ) }
    </>
  )
}
