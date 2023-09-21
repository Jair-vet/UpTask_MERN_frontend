import React from 'react'

export const Login = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-5xl capitalize">Inicia Sesión y Administra tus
        <span className='text-slate-700'> Proyectos</span> 
      </h1>

      <form className='my-10  bg-gray-400 shadow-xl rounded-lg px-10 py-5'>
        <div>
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

        <input 
          type='submit'
          value='Iniciar Sesión'
          className='bg-sky-700 w-full mt-10 py-3 text-white uppercase font-bold rounded 
            hover:cursor-pointer hover:bg-sky-900 transition-colors mb-5'
        />
      </form>
    </>
  )
}
