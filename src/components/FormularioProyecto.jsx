import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useProyectos from '../hooks/useProyectos'
import { Alerta } from '../components/Alerta'

export const FormularioProyecto = () => {

  const [id, setId] = useState(null)
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [fechaEntrega, setFechaEntrega] = useState('')
  const [cliente, setCliente] = useState('')

  const params = useParams()
  const { mostrarAlerta, alerta, submitProyecto, proyecto } = useProyectos();

  useEffect(() => {
    if( params.id ) {
      setId(proyecto._id)
      setNombre(proyecto.nombre)
      setDescripcion(proyecto.descripcion)
      setFechaEntrega(proyecto.fechaEntrega?.split('T')[0])
      setCliente(proyecto.cliente)
    } 
  }, [params])

  const handleSubmit = async e => {
    e.preventDefault()

    if([nombre, descripcion, fechaEntrega, cliente].includes('') ) {
      mostrarAlerta({
          msg: 'All field are Required',
          error: true
      })

      return
    }

    // Pasar los Datos alProvider
    await submitProyecto({ id, nombre, descripcion, fechaEntrega, cliente})

    setId(null)
    setNombre('')
    setDescripcion('')
    setFechaEntrega('')
    setCliente('')

  }


  const { msg } = alerta

  return (
    <form 
      className="bg-white py-7 px-5 md:w-1/2 rounded-lg shadow"
      onSubmit={handleSubmit}
    >
      
      {
        id ? (
          <div className="p-3">
            <p className="text-3xl mb-5 text-center text-gray-400 font-extrabold uppercase">Update project</p>
          </div>
        ) : (
          <div className="p-3">
            <p className="text-3xl mb-5 text-center text-gray-400 font-extrabold uppercase">Create Project</p>
          </div>
        )
      }

      {msg && <Alerta alerta={alerta} />}

      <div className='mb-5'>
       
        {/* Nombre */}
        <div>
          <label
            className="text-gray-700 uppercase font-bold text-sm"
            htmlFor="nombre" 
          >
            
            Project Name
          </label>

          <input 
            id="nombre"
            type="text"
            className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md focus:outline-none focus:ring focus:ring-sky-300"
            placeholder="Project Name"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>

        {/* Descripción */}
        <div className='mt-4'>
          <label
            className="text-gray-700 uppercase font-bold text-sm mt-10"
            htmlFor="descripcion" 
          >
            Project Description
          </label>

          <textarea 
            id="descripcion"
            className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md focus:outline-none focus:ring focus:ring-sky-300"
            placeholder="Project Description"
            value={descripcion}
            onChange={e => setDescripcion(e.target.value)}
          />
        </div>

        {/* Fecha de Entrega */}
        <div className='mt-4'>
          <label
            className="text-gray-700 uppercase font-bold text-sm"
            htmlFor="fecha-entrega" 
          >
            Date of Delivery
          </label>

          <input 
            id="fecha-entrega"
            type="date"
            className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md focus:outline-none focus:ring focus:ring-sky-300"
            value={fechaEntrega}
            onChange={e => setFechaEntrega(e.target.value)}
          />
        </div>

        {/* Nombre Cliente */}
        <div className='mt-4'>
          <label
            className="text-gray-700 uppercase font-bold text-sm"
            htmlFor="cliente" 
          >
            Client Name
          </label>

          <input 
            id="cliente"
            type="text"
            className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md focus:outline-none focus:ring focus:ring-sky-300"
            placeholder="Client Name"
            value={cliente}
            onChange={e => setCliente(e.target.value)}
          />
        </div>
      </div>

      <input
        type='submit'
        value={id ? 'Update Project' : 'Create Project'}
        className='bg-sky-600 w-full p-3 uppercase font-bold text-white rounded cursor-pointer hover:bg-sky-700 duration-300'
      /> 

    </form>
  )
}
