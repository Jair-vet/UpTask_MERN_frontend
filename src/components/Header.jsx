import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header className="px-4 py-5 bg-white border-b">
        <div className="md:flex md:justify-between">
            <h2 className="text-4xl text-sky-600 text-center font-black">UpTask</h2>

            <div className="flex justify-center">
                <input 
                    type="search"
                    placeholder="Buscar Proyecto"
                    className="rounded-lg lg:w-96 block p-2 border"
                />
            </div>

            <div className="flex items-center gap-4 md:mt-0 mt-6 justify-center">
                <Link 
                    to="/proyectos"
                    className="font-bold p-3 uppercase hover:-translate-y-3 hover:bg-gray-200 duration-500 hover:rounded-md shadow-md"
                >   Proyectos </Link>

                <button
                    type="button"
                    className="text-white text-sm bg-sky-600 hover:bg-sky-700 duration-300 p-3 rounded-md uppercase font-bold"
                >Cerrar Sesión</button>
            </div>
        </div>
    </header>
  )
}
