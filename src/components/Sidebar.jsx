import { Link } from "react-router-dom"
import useAuth from '../hooks/useAuth'

export const Sidebar = () => {

    const { auth } = useAuth()

    return (
    // <aside className="md:w-64 lg:w-80 px-5 py-10 bg-sky-800 shadow-xl">
    <aside className="md:w-1/3 lg:w-1/5 xl:w-1/6 px-5 py-10 bg-sky-800 shadow-xl">
        <p className="text-xl font-light text-white text-center">Welcome <span className="text-white font-bold">{ auth.nombre }</span></p>
        
        <div className='flex items-center'>
            <Link 
                to="crear-proyecto"
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 duration-300 w-full p-3 text-white uppercase font-bold text-center mt-5 rounded-lg"
            >new project
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </Link>
        </div>
    
    </aside>

  )
}
