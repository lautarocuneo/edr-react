import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white '>
        <h1 className='w-full text-3xl font-bold text-[#2A86E2]'>Equipos de Rodaje</h1>
        <ul className='flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Empresa</li>
            <li className='p-4'>Recursos</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contacto</li>
        </ul>
    </div>
  )
}

export default NavBar