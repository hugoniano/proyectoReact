import React from 'react';
 
class Detalles extends React.Component {
 
  render() {
 
    return (
 
    
<div className="container p-5">
        <h1 className="text-center titulo">The Kids's Team</h1>
        <p className="text-center">
            Este es nuestro equipo de trabajo, los niños de Belén:
        </p>
        
    <div className= "row">
     <div className="col-md-3 text-center justify-content-center align-self-center">
       <div className="card izquierda">
          <div className="card-body ">
          <img src={process.env.PUBLIC_URL + 'images/Hugo.jpg'} class="img-fluid rounded-circle w-50 "></img>
          <h3>Hugo A. Montoya</h3>
          <p>
            Empresario, bartender, y encargado co
            
            }mercial de la marca. Fundador e ideador de las tendencias de la marca.
          </p>
        <div className="d-flex flex-row justify-content-center">
          <div className="p-4">
            <a href="https://web.facebook.com/hugomontoyame/"><i class="fab fa-facebook-f"></i></a>
          </div>
          
          <div className="p-4">
            <a href="https://www.instagram.com/elsorneromayor"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
       </div>
      </div>
     </div>
    
     <div className="col-md-3 text-center justify-content-center align-self-center">
       <div className="card izquierda">
          <div className="card-body ">
          <img src={process.env.PUBLIC_URL + 'images/Cana.jpg'} class="img-fluid rounded-circle w-50 "></img>
          <h3>Santiago Ramirez</h3>
          <p>
          Melómano, coleccionista de música, empresario e ingeniero civil. Apasionado por la música, lo cual aporta a The Kids of Belen.
          </p>
        <div className="d-flex flex-row justify-content-center">
          <div className="p-4">
            <a href="https://web.facebook.com/elpatan2021"><i class="fab fa-facebook-f"></i></a>
          </div>
          
          <div className="p-4">
            <a href="https://www.instagram.com/santiago.ramireza"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
       </div>
      </div>
     </div>

    <div className="col-lg-3 text-center justify-content-center align-self-center">
    <div className="card derecha">
      <div className="card-body">
        <img src={process.env.PUBLIC_URL + 'images/Josh.jpg'} class="img-fluid rounded-circle w-50 "></img>
        <h3>Julian <span><b>Josh</b></span> Rodriguez</h3>
        <p>
          Diseñador gráfico, tatuador y skater. Es la principal mente creativa detrás de los Niños de Belen. Está un poco loco.
        </p>
        <div className="d-flex flex-row justify-content-center">
          <div class="p-4">
            <a href="https://web.facebook.com/juliandavid.rodriguezlondono.52"><i class="fab fa-facebook-f"></i></a>
          </div>
          
          <div className="p-4">
            <a href="https://www.instagram.com/juliandavidrod/"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div> 

    <div className="col-lg-3 text-center justify-content-center align-self-center">
    <div className="card derecha">
      <div className="card-body">
        <img src={process.env.PUBLIC_URL + 'images/Eche.jpg'} class="img-fluid rounded-circle w-50 "></img>
        <h3>Mateo <span><b>Eche</b></span> Echeverri </h3>
        <p>
             Diseñador gráfico, melómano y coleccionista de música. Amante de los LPs. Aporta su creatividad y cultura a The Kids. 
        </p>
        <div className="d-flex flex-row justify-content-center">
          <div class="p-4">
            <a href="https://web.facebook.com/mateo.echeverri.96"><i class="fab fa-facebook-f"></i></a>
          </div>
          
          <div className="p-4">
            <a href="https://www.instagram.com/eee.che/"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div> 
 </div>

</div>
    

    )
    
  }
 
}

export default Detalles;