import { formatearFecha } from "../helpers/formatearFecha"
import useAdmin from "../hooks/useAdmin";
import useProyectos from "../hooks/useProyectos"

export const Tarea = ({ tarea }) => {

    const { handleModalEditarTarea, handleModalEliminarTarea, completarTarea } = useProyectos()
    const { descripcion, nombre, prioridad, fechaEntrega, estado, _id } = tarea;

    const admin = useAdmin()

  return (
    <div className="border-b p-5 flex md:flex-row flex-col justify-between items-center ">
       {/* Información de la Tarea */}
        <div className="flex flex-col text-center md:items-start">
            <p className="mb-1 text-xl">{nombre}</p>
            <p className="mb-1 text-sm text-gray-500 uppercase">{descripcion}</p>
            <p className="mb-1 text-sm">{ formatearFecha(fechaEntrega)}</p>
            <p className="mb-1 text-gray-600">Prioridad: {prioridad}</p>
        </div>

        {/* Botones Acciones */}
        <div className="flex md:flex-row flex-col gap-2">
            { admin && (
                <button
                    className="bg-indigo-500 duration-300 hover:bg-indigo-700 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                    onClick={() => handleModalEditarTarea(tarea)}
                >Editar</button>
            )}

            {/* Botones Incompleta, Completa */}
            <button
                className={`${estado ? 'bg-emerald-600' : 'bg-gray-600'} px-4 py-3 text-white uppercase font-bold text-sm rounded-lg`}
                onClick={() => completarTarea(_id)}
            >{estado ? 'Completa' : 'Incompleta'}</button>


            { admin && (
                <button
                    className="bg-red-500 duration-300 hover:bg-red-700 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                    onClick={ () => handleModalEliminarTarea(tarea) }
                >Eliminar</button>
            )}

        </div>
    </div>
  )
}
