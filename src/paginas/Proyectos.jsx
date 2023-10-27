import { useEffect } from "react";
import { Alerta } from "../components/Alerta"
import { PreviewProyecto } from "../components/PreviewProyecto"
import useProyectos from "../hooks/useProyectos"
import io from 'socket.io-client'

let socket;

export const Proyectos = () => {

  const { proyectos, alerta } = useProyectos()
  
  useEffect(() => {
    socket = io(import.meta.env.VITE_BACKEND_URL)
    
  }, [])
  
  const {msg} = alerta

  return (

    <>
      <h1 className="text-4xl font-black">Projects</h1>
      
      {msg && <Alerta alerta={alerta} />}

      <div className="bg-white shadow mt-10 rounded-md p-5">
        { proyectos.length ? 
          proyectos.map(proyecto => (
            <PreviewProyecto 
              key={proyecto._id}
              proyecto={proyecto}
            />
          ))
        : <p className="text-center text-gray-600 uppercase">No hay Proyectos Aùn</p> }
      </div>
    </>
  )
}
