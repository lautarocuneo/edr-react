import React from 'react';
import Slider from "./Slider";

const Equipos = () => {
    const slides = [
        { url: "/alexa-mini.jpg", title: "Camara" },
        { url: "/lentes-13.jpeg", title: "Lente" },
        { url: "/arri-sky.jpeg", title: "Luces" },
        { url: "/filmacion.jpg", title: "Utileria" }
    ];

    return (
    <div className='w-full bg-[#141717] text-white py-4 pt-16 px-5 md:py-16'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='h-72'>
                    <Slider slides={slides}/> 
                </div>
                <div className='flex flex-col justify-center p-4'>
                    <p className='text-[#2A86E2] text-xl'>RENTAL</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Alquiler de equipos de filmación</h1>
                    <p className='text-sm md:text-lg'>
                    Contamos con un equipamiento extenso y de alta gama para satisfacer todas tus demandas de producción.
                    Proveemos una gran variedad de cámaras, accesorios, iluminación, monitores, lentes, entre otros productos,
                    garantizando que tengas las mejores herramientas para llevar a cabo tus proyectos audiovisuales con la máxima precisión y profesionalismo.
                    </p>
                    <button className='bg-[#2A86E2] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black'>Catálogo rental</button>
            </div>
        </div>
    </div>
    );
};

export default Equipos;
