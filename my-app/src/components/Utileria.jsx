import React from 'react';
import Slider from './Slider';

const Utileria = () => {

    return (
        <div className='w-full bg-gradient-to-r from-[#0f1111] via-[#1a1a1a] to-[#0f1111] h-full text-white py-4 px-5 md:py-16'>
            <div className='max-w-[1240px] mx-auto flex flex-col gap-8'>
                <div className='flex flex-col justify-center p-4'>
                    <p className='text-[#e2862a] text-2xl text-center'>PROPS</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center'>Departamento de arte</h1>
                    <p className='text-sm md:text-lg text-center'>
                        Proveemos principalmente a la industria audiovisual, así como al ámbito teatral, eventos, empresarial y cualquier sector
                        que lo solicite, de equipamiento real de todas las épocas, en lo que respecta a fotografía, cinematografía, TV y otros. 
                    </p>     
                </div>
                <div className='h-72 w-[70%] m-auto'>
                    <Slider slides={[
                        { url: "/camara-atc.JPG", title: "Fotografía" },
                        { url: "/sextante.jpg", title: "Cinematografía" },
                        { url: "/foto.jpg", title: "Televisión" },
                        { url: "/2.png", title: "Otros" }
                    ]}/> 
                </div>
                
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
                    <div className='relative group cursor-pointer overflow-hidden rounded-lg w-full h-[200px] bg-[#1a1a1a] flex items-center justify-center'>
                        <p className='text-xl md:text-2xl font-bold text-white'>Fotografía</p>
                    </div>
                    <div className='relative group cursor-pointer overflow-hidden rounded-lg w-full h-[200px] bg-[#1a1a1a] flex items-center justify-center'>
                        <p className='text-xl md:text-2xl font-bold text-white'>Cinematografía</p>
                    </div>
                    <div className='relative group cursor-pointer overflow-hidden rounded-lg w-full h-[200px] bg-[#1a1a1a] flex items-center justify-center'>
                        <p className='text-xl md:text-2xl font-bold text-white'>Televisión</p>
                    </div>
                    <div className='relative group cursor-pointer overflow-hidden rounded-lg w-full h-[200px] bg-[#1a1a1a] flex items-center justify-center'>
                        <p className='text-xl md:text-2xl font-bold text-white'>Otros</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Utileria;
