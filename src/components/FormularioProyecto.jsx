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
          msg: 'Todos los Campos son Obligatorios',
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
      className="bg-white py-10 px-5 md:w-1/2 rounded-lg shadow"
      onSubmit={handleSubmit}
    >

      {msg && <Alerta alerta={alerta} />}

      <div className='mb-5'>
       
        {/* Nombre */}
        <div>
          <label
            className="text-gray-700 uppercase font-bold text-sm"
            htmlFor="nombre" 
          >
            Nombre Proyecto
          </label>

          <input 
            id="nombre"
            type="text"
            className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md focus:outline-none focus:ring focus:ring-sky-300"
            placeholder="Nombre del Proyecto"
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
            Descripción Proyecto
          </label>

          <textarea 
            id="descripcion"
            className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md focus:outline-none focus:ring focus:ring-sky-300"
            placeholder="Descripcion del Proyecto"
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
            Fecha de Entrega
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
            Nombre Cliente
          </label>

          <input 
            id="cliente"
            type="text"
            className="border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md focus:outline-none focus:ring focus:ring-sky-300"
            placeholder="Nombre del CrearCliente"
            value={cliente}
            onChange={e => setCliente(e.target.value)}
          />
        </div>
      </div>

      <input
        type='submit'
        value={id ? 'Actualizar Proyecto' : 'Crear Proyecto'}
        className='bg-sky-600 w-full p-3 uppercase font-bold text-white rounded cursor-pointer hover:bg-sky-700 duration-300'
      /> 

    </form>
  )
}
