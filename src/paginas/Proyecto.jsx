import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import useProyectos from '../hooks/useProyectos';
import ModalFormularioTarea from '../components/ModalFormularioTarea';
import { Tarea } from '../components/Tarea';
import ModalEliminarTarea from '../components/ModalEliminarTarea';

export const Proyecto = () => {

    const params = useParams()
    const { obtenerProyecto, proyecto, cargando, handleModalTarea } = useProyectos()

    useEffect(() => {
        obtenerProyecto(params.id)
    }, [])

    const { nombre } = proyecto
    if(cargando) return 'Cargando...'
    
  return (
    <>
        
        <div className='flex justify-between'>
            <h1 className='font-black text-4xl'>{nombre}</h1>

            <div className='flex items-center gap-2 text-gray-500 hover:text-emerald-600'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>

                <Link
                    to={`/proyectos/editar/${params.id}`}
                    className='uppercase font-bold'
                >Editar</Link>
            </div>
        </div>

        
        <button
            onClick={ handleModalTarea }
            type='button'
            className='flex gap-2 item-center justify-center text-md mt-5 px-5 py-3 w-full md:w-auto rounded-lg uppercase font-bold bg-sky-400 hover:bg-sky-500 duration-300 text-white text-center'
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Nueva Tarea
        </button>


        <p className='font-bold text-xl mt-10'>Tareas del Proyecto</p>

        <div className='bg-white overflow-auto shadow mt-10 rounded-lg'>
            {proyecto.tareas?.length ? 
                proyecto.tareas?.map( (tarea) => (
                <Tarea 
                    key={tarea._id}
                    tarea={tarea}
                />
                )) : 
            <p className='text-center my-5 p-10'>No hay tareas en este proyecto</p>}
        </div>
            

        <ModalFormularioTarea />
        <ModalEliminarTarea />

    </>
  )
}
