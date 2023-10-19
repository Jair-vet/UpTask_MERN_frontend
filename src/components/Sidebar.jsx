import { Link } from "react-router-dom"
import useAuth from '../hooks/useAuth'

export const Sidebar = () => {

    const { auth } = useAuth()

    return (
    <aside className="md:w-80 lg:w-96 px-5 py-10 bg-sky-800 shadow-xl">
        <p className="text-xl font-light text-white text-center">Bienvenido <span className="text-white font-bold">{ auth.nombre }</span></p>
        
        <Link 
            to="crear-proyecto"
            className="bg-emerald-600 hover:bg-emerald-700 duration-300 w-full p-3 text-white uppercase font-bold block text-center mt-5 rounded-lg"
        >Nuevo Proyecto
        </Link>
    
    </aside>

  )
}
