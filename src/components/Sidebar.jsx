import { Link } from "react-router-dom"

export const Sidebar = () => {

    return (
    <aside className="md:w-80 lg:w-96 px-5 py-10 bg-sky-800 shadow-xl">
        <p className="text-xl font-bold text-white text-center">Bienvenido <span className="text-white">Jair</span></p>
        
        <Link 
            to="crear-proyecto"
            className="bg-emerald-600 w-full p-3 text-white uppercase font-bold block text-center mt-5 rounded-lg"
        >Nuevo Proyecto
        </Link>
    
    </aside>

  )
}
