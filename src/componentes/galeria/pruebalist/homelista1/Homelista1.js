import React from 'react';
import data from '../data';
import Tarjetaprecios from '../tarjetaprecios/Tarjetaprecios';



function showAdditional(additional) {
  const alertInformation = Object.entries(additional)
    .map(information => `${information[0]}: ${information[1]}`)
    .join('\n');
  alert(alertInformation)
};


function Homelista1() {
  return (
    <div className="wrapper">
      <h1>Tarjeta de informacion por animal</h1>
      {data.map(animal => (
        <Tarjetaprecios additional={animal.additional}
          diet={animal.diet} key={animal.name} name={animal.name} scientificName={animal.scientificName} showAdditional={showAdditional}
          size={animal.size}/>
      ))}
    </div>
  )
}

export default Homelista1;