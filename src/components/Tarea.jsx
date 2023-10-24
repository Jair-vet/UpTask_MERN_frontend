import { formatearFecha } from "../helpers/formatearFecha"
import useProyectos from "../hooks/useProyectos"

export const Tarea = ({ tarea }) => {

    const { handleModalEditarTarea /* handleModalEliminarTarea, completarTarea  */} = useProyectos()
    const { descripcion, nombre, prioridad, fechaEntrega, estado, _id } = tarea;


  return (
    <div className="border-b p-5 flex md:flex-row flex-col justify-between items-center ">
       {/* Información de la Tarea */}
        <div className="flex flex-col  items-start">
            <p className="mb-1 text-xl">{nombre}</p>
            <p className="mb-1 text-sm text-gray-500 uppercase">{descripcion}</p>
            <p className="mb-1 text-xl">{ formatearFecha(fechaEntrega)}</p>
            <p className="mb-1 text-gray-600">Prioridad: {prioridad}</p>
        </div>

        {/* Botones Acciones */}
        <div className="flex md:flex-row flex-col gap-2">
            <button
                className="bg-indigo-500 duration-300 hover:bg-indigo-700 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                onClick={() => handleModalEditarTarea(tarea)}
            >Editar</button>

            { estado 
                ? (
                    <button
                        className="bg-sky-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                    >Completa</button>
                ) : (
                    <button
                        className="bg-gray-500 duration-300 hover:bg-gray-700 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                    >Incompleta</button>
                )
            }
            
            <button
                className="bg-red-500 duration-300 hover:bg-red-700 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
            >Eliminar</button>

        </div>
    </div>
  )
}
