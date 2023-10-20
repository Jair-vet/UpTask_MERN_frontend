import { formatearFecha } from "../helpers/formatearFecha"

export const Tarea = ({ tarea }) => {

    const { descripcion, nombre, prioridad, fechaEntrega, estado, id } = tarea

  return (
    <div className="border-b p-5 flex justify-between items-center">
       {/* Información de la Tarea */}
        <div>
            <p className="mb-1 text-xl">{nombre}</p>
            <p className="mb-1 text-sm text-gray-500 uppercase">{descripcion}</p>
            <p className="mb-1 text-xl">{ formatearFecha(fechaEntrega)}</p>
            <p className="mb-1 text-gray-600">Prioridad: {prioridad}</p>
        </div>

        {/* Botones Acciones */}
        <div className="flex gap-2">
            <button
                className="bg-purple-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
            >Editar</button>

            { estado 
                ? (
                    <button
                        className="bg-green-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                    >Completa</button>
                ) : (
                    <button
                        className="bg-yellow-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                    >Incompleta</button>
                )
            }
            
            <button
                className="bg-red-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
            >Eliminar</button>

        </div>
    </div>
  )
}
