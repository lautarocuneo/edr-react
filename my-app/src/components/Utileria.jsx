import React from 'react';
import Slider from './Slider';
import { GiSteampunkGoggles } from 'react-icons/gi';

const Utileria = () => {
    const slides = [
        { url: "/arte-fotografia.jpg", title: "Fotografía", file: "/inventario-arte-foto.xlsx" },
        { url: "/arte-cinematografia.jpg", title: "Cinematografía", file: "/inventario-arte-video.pdf" },
        { url: "/camara-atc.JPG", title: "Televisión", file: "/inventario-arte-tv.pdf" },
        { url: "/sextante.jpg", title: "Otros", file: "/inventario-otros.xlsx" }
    ];

    const slidesCarrousel = [
        { url: "/DSC00960.jpg"},
        { url: "/DSC01019.jpg"},
        { url: "/DSC00908.jpg"},
        { url: "/DSC00922.jpg"},
        { url: "/DSC00978.jpg"},
        { url: "/DSC00364.jpg"},
        { url: "/DSC00341.jpg"},
        { url: "/DSC00295.jpg"},
        { url: "/DSC00385.jpg"},
        { url: "/DSC00361.jpg"},
        { url: "/DSC00399.jpg"}
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
                    <Slider slides={slidesCarrousel}/> 
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
                                <button
                                    className='bg-[#e2862a] text-white rounded-md font-medium py-3 px-6 transition-opacity duration-500 opacity-0 group-hover:opacity-100 absolute'
                                    onClick={() => {
                                        const link = document.createElement('a');
                                        link.href = slide.file; // Ruta al archivo correspondiente
                                        link.download = slide.file.split('/').pop(); // Nombre del archivo descargado
                                        link.click();
                                    }}
                                >
                                    Ver más
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-[#242424] p-8 rounded-lg shadow-lg text-center max-w-[200px] mx-auto transition-transform duration-300 hover:scale-105">
                    <p className="text-[#e2862a] text-xl">ARS MACHINA ARGENTINA</p>
                    <a href="https://www.instagram.com/ars_machina_argentina/" target="_blank" rel="noopener noreferrer">
                        <GiSteampunkGoggles size={50} className="hover:text-[#e2862a] transition-transform transition-colors duration-300 hover:scale-110 m-auto mt-4" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Utileria;
