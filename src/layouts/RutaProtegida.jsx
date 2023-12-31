import { Navigate, Outlet } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export const RutaProtegida = () => {

    const { auth, cargando } = useAuth();
    
    if(cargando) return 'Cargando...'
   
    return (
        <>
            {auth._id ? (
                <div className="bg-gray-200">
                    <Header />

                    <div className="md:flex md:min-h-screen">
                        <Sidebar />

                        <main className="p-10 flex-1 overflow-scroll bg-gray-300 h-screen">
                            <Outlet />
                        </main>
                    </div>
                </div>
            ) : <Navigate to="/" />}
        </>
  )
}
