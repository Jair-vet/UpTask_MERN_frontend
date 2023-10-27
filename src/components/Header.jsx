import { Link } from "react-router-dom"
import useProyectos from '../hooks/useProyectos'
import useAuth from '../hooks/useAuth'
import Busqueda from "./Busqueda"
// import Busqueda from './Busqueda'

export const Header = () => {

    const { handleBuscador, cerrarSesionProyectos } = useProyectos()
    const { cerrarSesionAuth } = useAuth()

    const handleCerrarSesion = () => {
        cerrarSesionAuth()
        cerrarSesionProyectos()
        localStorage.removeItem('token')
    }

  return (
    <header className="px-4 py-5 bg-white border-b">
        <div className="md:flex md:justify-between">
            <h2 className="text-4xl text-sky-600 text-center font-black">UpTask</h2>

            <div className="flex justify-center">
                <button 
                    type="button"
                    className="rounded-lg lg:w-96 block p-2 border"
                    onClick={ handleBuscador }
                >Search Projects</button>
            </div>

            <div className="flex items-center gap-4 md:mt-0 mt-6 justify-center">
                <Link 
                    to="/proyectos"
                    className="font-bold p-3 uppercase hover:-translate-y-3 hover:bg-gray-200 duration-500 hover:rounded-md shadow-md"
                >   Projects </Link>

                <button
                    type="button"
                    className="text-white text-sm bg-sky-600 hover:bg-sky-700 duration-300 p-3 rounded-md uppercase font-bold"
                    onClick={handleCerrarSesion}
                >Sign off</button>

                <Busqueda />
            </div>
        </div>
    </header>
  )
}
