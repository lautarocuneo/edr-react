import React from 'react';
import Slider from "./Slider";

const Utileria = () => {
    const slides = [
        { url: "/camara-atc.JPG", title: "Camara" },
        { url: "/sextante.jpeg", title: "Lente" },
        { url: "/foto.jpeg", title: "Luces" },
        { url: "/2.png", title: "Utileria" }
    ];

    return (
    <div className='w-full bg-[#050606] text-white py-16 px-5 '>
        <div className='max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
                
                <div className='flex flex-col justify-center p-4'>
                    <p className='text-[#2a86e2] text-xl'>EQUIPOS DE RODAJE</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Utilería</h1>
                    <p>
                    Ademas contamos con un extenso y variado equipamiento de utilería para satisfacer todas tus necesidades de producción.
                    Ofrecemos una amplia gama de cámaras antiguas, aparatos históricos, y otros accesorios únicos,
                    asegurando que dispongas de las mejores herramientas para llevar a cabo tus proyectos audiovisuales con un toque auténtico y profesionalismo inigualable.
                    </p>
                    <button className='bg-[#2a86e2] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black'>Descargar Catálogo</button>
            </div>
            <div className='h-72'>
                <Slider slides={slides}/> 
            </div>
        </div>
    </div>
    );
};

export default Utileria;
