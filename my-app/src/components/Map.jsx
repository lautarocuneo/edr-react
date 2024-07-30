import React from 'react';

const Map = () => {
  return (
    <div className='w-[100%]'>
      <iframe 
        width="100%" 
        height="500" 
        src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Chorroarin%20486+(Equipos%20de%20Rodaje)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
        title="Mapa de Equipos de Rodaje"
      >
        <a href="https://www.gps.ie/">gps tracker sport</a>
      </iframe>
    </div>
  );
}

export default Map;
