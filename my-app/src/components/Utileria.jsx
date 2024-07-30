import React from 'react';
import Slider from './Slider';

const Utileria = () => {

    const slides = [
        { url: "/camara-atc.JPG", title: "Fotografía" },
        { url: "/sextante.jpg", title: "Cinematografía" },
        { url: "/foto.jpg", title: "Televisión" },
        { url: "/2.png", title: "Otros" }
    ];

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
                    <Slider slides={slides}/> 
                </div>
                
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className='relative group cursor-pointer overflow-hidden rounded-lg w-full h-[200px]'
                        >
                            <img
                                src={slide.url} // Ruta de la imagen
                                alt={slide.title}
                                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                            />
                            <div className='absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-500 group-hover:bg-opacity-50' />
                            <div className='absolute inset-0 flex items-center justify-center'>
                                <p className='text-xl md:text-2xl font-bold text-white opacity-100 transition-opacity duration-500 group-hover:opacity-0'>
                                    {slide.title}
                                </p>
                                <button className='bg-[#e2862a] text-white rounded-md font-medium py-3 px-6 transition-opacity duration-500 opacity-0 group-hover:opacity-100 absolute'>
                                    Ver más
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Utileria;
