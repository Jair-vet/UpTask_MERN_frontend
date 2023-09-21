
export const NuevoPassword = () => {
  return (
    <>
      <h1 className="text-center text-sky-600 font-black text-5xl capitalize">Reestablece tu password y no pierdas acceso a Tus
        <span className='text-slate-700'> Proyectos</span> 
      </h1>

      <form className='my-10  bg-gray-400 shadow-xl rounded-lg px-10 py-5'>
        
        {/* Password */}
        <div className='mt-5'>
          <label 
            className='uppercase text-gray-600 block text-xl font-bold'
            htmlFor='password'
          >Nuevo Password</label>
          <input
            id='password'
            type='password'
            placeholder='Escribe tu Nuevo Password'
            className='w-full mt-1 p-2 border rounded-lg bg-gray-200'
          />
        </div>

        <input 
          type='submit'
          value='Guardar Nuevo Password'
          className='bg-sky-700 w-full mt-10 py-3 text-white uppercase font-bold rounded 
            hover:cursor-pointer hover:bg-sky-900 transition-colors mb-5'
        />
      </form>

    </>
  ) 
}



