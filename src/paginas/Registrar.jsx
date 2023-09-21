import { Link } from 'react-router-dom'

export const Registrar = () => {
  return (
    <>
      <h1 className="text-center text-sky-600 font-black text-5xl capitalize">Crea tu Cuenta y Administra Tus
        <span className='text-slate-700'> Proyectos</span> 
      </h1>

      <form className='my-10  bg-gray-400 shadow-xl rounded-lg px-10 py-5'>
        
        {/* Nombre */}
        <div>
          <label 
            className='uppercase text-gray-600 block text-xl font-bold'
            htmlFor='nombre'
          >Nombre</label>
          <input
            id='nombre'
            type='text'
            placeholder='Nombre de Registro'
            className='w-full mt-1 p-2 border rounded-lg bg-gray-200'
          />
        </div>
        {/* Email */}
        <div className='mt-5'>
          <label 
            className='uppercase text-gray-600 block text-xl font-bold'
            htmlFor='email'
          >Email</label>
          <input
            id='email'
            type='email'
            placeholder='Email de Registro'
            className='w-full mt-1 p-2 border rounded-lg bg-gray-200'
          />
        </div>
        {/* Password */}
        <div className='mt-5'>
          <label 
            className='uppercase text-gray-600 block text-xl font-bold'
            htmlFor='password'
          >Password</label>
          <input
            id='password'
            type='password'
            placeholder='Password'
            className='w-full mt-1 p-2 border rounded-lg bg-gray-200'
          />
        </div>
        {/* Confirmar Password */}
        <div className='mt-5'>
          <label 
            className='uppercase text-gray-600 block text-xl font-bold'
            htmlFor='password2'
          >Confirmar Password</label>
          <input
            id='password2'
            type='password'
            placeholder='Confirmar Password'
            className='w-full mt-1 p-2 border rounded-lg bg-gray-200'
          />
        </div>

        <input 
          type='submit'
          value='Crear Cuenta'
          className='bg-sky-700 w-full mt-10 py-3 text-white uppercase font-bold rounded 
            hover:cursor-pointer hover:bg-sky-900 transition-colors mb-5'
        />
      </form>

      <nav className="lg:flex lg:justify-between">
        {/* Iniciar Sesión */}
        <div className='flex md:flex-row justify-center my-5'>
          <p className='block text-center md:my-0 my-2 text-slate-900 uppercase text-sm mr-2'>¿Ya tienes una Cuenta?</p>
          <Link 
            className='block text-center md:my-0 my-2 text-slate-500 uppercase text-sm underline'
            to="/"
          > Iniciar Sesión</Link>
        </div>

        {/* Olvide Passsword */}
        <Link 
          className='block text-center my-5 text-slate-500 uppercase text-sm underline'
          to="/olvide-password"
        > Olvidé mi Password</Link>
      </nav>

    </>
  )
}
