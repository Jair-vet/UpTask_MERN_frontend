import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import useProyectos from '../hooks/useProyectos';
import ModalFormularioTarea from '../components/ModalFormularioTarea';
import { Tarea } from '../components/Tarea';
import ModalEliminarTarea from '../components/ModalEliminarTarea';
import { Alerta } from '../components/Alerta';

export const Proyecto = () => {

    const params = useParams()
    const { obtenerProyecto, proyecto, cargando, handleModalTarea, alerta } = useProyectos()

    useEffect(() => {
        obtenerProyecto(params.id)
    }, [])

    const { nombre } = proyecto
    if(cargando) return 'Cargando...'

    const { msg } = alerta
    
  return (
    <>
        <div className='flex md:justify-between md:flex-row flex-col justify-center items-center'>
            <h1 className='font-black text-4xl'>{nombre}</h1>

            <div className='md:w-[60px] w-full text-gray-500 rounded-md hover:text-emerald-600 md:mt-0 mt-7 md:border-none duration-300 md:p-0 p-2 border-2 border-gray-300 hover:border-emerald-600'>

                {/* Boton Editar */}
                <Link
                    to={`/proyectos/editar/${params.id}`}
                    className='uppercase font-bold flex gap-2 w-full justify-center'
                >
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>

                </div>
                    Editar
                </Link>

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


        <p className='text-3xl mt-7 md:text-left text-center text-gray-500 font-extrabold uppercase'>Tareas del Proyecto</p>
        
        {/* Mensaje de Alerta */}
        <div className="flex justify-center ">
            <div className='w-full md:w-1/3 lg:w-1/4'>
                { msg && <Alerta alerta={alerta}/> }
            </div>
        </div>

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
        {/* Colaboradores */}        
        <div className='flex md:flex-row flex-col items-center justify-between mt-10'>
            <p className="text-3xl mt-7  text-gray-500 font-extrabold uppercase">Colaboradores</p>
            <div className='md:w-[60px] w-full text-gray-500 rounded-md hover:text-indigo-600 md:mt-0 mt-7 md:border-none duration-300 md:p-0 p-2 border-2 border-gray-300 hover:border-indigo-600'>
                <Link
                    to={`/proyectos/nuevo-colaborador/${proyecto._id}`}
                    className='uppercase font-bold flex gap-2 w-full justify-center'
                >
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>

                </div>
                    Añadir
                </Link>
            </div>
        </div>
            

        <ModalFormularioTarea />
        <ModalEliminarTarea />

    </>
  )
}
