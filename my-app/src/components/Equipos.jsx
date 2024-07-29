import React from 'react';
import Slider from "./Slider";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Equipos = () => {
    const slides = [
        { url: "/collage-fondo-programacion.jpg", title: "Camara" },
        { url: "/4884785.jpg", title: "Lente" },
        { url: "/collage-fondo-programacion.jpg", title: "Luces" },
        { url: "/4884785.jpg", title: "Grip" },
        { url: "/collage-fondo-programacion.jpg", title: "Utileria" }
    ];

    return (
    <div className='w-full bg-[#141717] text-white py-16 px-5 '>
        <div className='max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='h-72'>
                    <Slider slides={slides}/> 
                </div>
                <div className='flex flex-col justify-center p-4'>
                    <p className='text-[#2A86E2] text-xl'>EQUIPOS DE RODAJE</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Equipos de filmación</h1>
                    <p>
                    Contamos con un equipamiento amplio y de alta calidad para satisfacer todas tus necesidades de producción.
                    Ofrecemos una gran variedad de cámaras, grip, iluminación, monitores, ópticas, entre otros productos,
                    garantizando que dispongas de las mejores herramientas para llevar a cabo tus proyectos audiovisuales
                    con la máxima precisión y profesionalismo
                    </p>
                    <button className='bg-[#2A86E2] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black'>Descargar Catálogo</button>
            </div>
        </div>
    </div>
    );
};

export default Equipos;
