import { useState, useEffect, createContext } from 'react'
import clienteAxios from '../config/clienteAxios'

const ProyectosContext = createContext()

const ProyectosProvider = ({children}) => {
    
    const [proyectos, setProyectos] = useState([])
    const [alerta, setAlerta] = useState({})

    const mostrarAlerta = alerta => {
        setAlerta(alerta)

        setTimeout(() => {
            setAlerta({})
        }, 4000)
    }

    const submitProyecto = async proyecto => {
        try {
            const token = localStorage.getItem('token')
            if(!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            // Los parametro para POST 1.Url 2.Info 3.Configuración
            const { data } = await clienteAxios.post('/proyectos', proyecto, config)
            console.log(data);

            setAlerta({
                msg: 'Proyecto Creado Correctamente',
                error: false
            })

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <ProyectosContext.Provider
            value={{
                proyectos,
                mostrarAlerta,
                alerta,
                submitProyecto,
            }}
        >

            {children}
        </ProyectosContext.Provider>

    )
}

export {
    ProyectosProvider
}

export default ProyectosContext
