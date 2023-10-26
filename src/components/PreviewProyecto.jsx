import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'


export const PreviewProyecto = ({ proyecto }) => {

    const { auth } = useAuth()
    const { nombre, _id, cliente, creador} = proyecto

  return (
        <div className='border-b p-5 flex flex-col md:flex-row justify-between duration-150 rounded-sm hover:bg-gray-200'>

            <div className='flex md:flex-row flex-col items-center gap-2 text-center text-lg'>
                <p className='flex-1'>
                    {nombre}

                    <span className='text-sm text-gray-500 uppercase'>
                        {''} {cliente}
                    </span>
                </p>

                {creador && (<p className='p-1 px-2 text-xs rounded-lg text-white bg-sky-500 font-bold uppercase'>Owner</p>)}
                
                {auth._id !== creador && (
                    <p className='p-1 text-xs rounded-lg text-white bg-green-500 font-bold uppercase'>collaborator</p>
                )}
            </div>

            <Link
                to={`${_id}`}
                className='text-gray-600 md:mt-0 mt-4 text-center md:shadow-xl p-3 duration-300 hover:rounded-md hover:bg-emerald-600 hover:text-white hover:shadow-none uppercase text-sm font-bold'
            >See Project</Link>
        </div>
    )
}
