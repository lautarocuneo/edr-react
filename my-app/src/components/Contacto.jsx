import React from 'react';
import Map from "./Map";
import { ContactUs } from "./ContactUs";

const Contacto = () => {
  return (
    <div className='bg-gradient-to-r  from-[#181818] via-[#1a1a1a] to-[#181818]  text-white'>
      <div className='flex flex-col items-center text-center py-8'>
        <p className='text-[#2A86E2] text-xl font-semibold'>CONTACTO</p>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-4'>
          Hacenos tu pedido y lo presupuestamos
        </h1>
      </div>
      <div className='max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-8 '>
        <div className='flex flex-col items-center p-8 rounded-lg bg-[#2a2a2a]'>
          <div className='w-full rounded-lg overflow-hidden '>
            <Map />
          </div>
          <p className='text-sm md:text-lg pt-4'>
            Chorroarin 486 - Agronomía - Capital Federal
          </p>
        </div>
        <div className='flex items-center justify-center p-8 bg-[#2a2a2a] rounded-lg'>
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default Contacto;
