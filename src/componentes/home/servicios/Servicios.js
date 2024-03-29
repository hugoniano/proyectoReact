import React from 'react';
import './Servicios.css';
 
class Servicios extends React.Component {
 
  render() {
 
    return (
 
        <div className="container servicios">
 
        <div className="container">
          <h1 className="text-center">Este es nuestro estilo de vida</h1>
          <p className="text-center">
                Nuestro proyecto está enfocado en 4 tópicos:
          </p>

        <div className="row">
          <div className="col-md-3">
            <div className="card text-center ">
              <div className="card-body">
              <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#777" />
                        <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                    </svg>
                <h3>Vestimenta</h3>
                <p>
                  El vestir expresando nuestras experiencias, ideas y gustos es el alma de <span><i>los Niños</i></span> de Belén. Nuestro deseo es plasmar el barrio, la elegancia, la frescura y la sorneridad en nuestra ropa.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center text-white card-cualquiera ">
              <div className="card-body">
              <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#777" />
                        <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                    </svg>
                <h3>Música</h3>
                <p>
                  Somos apasionados por la música. Escucharla, coleccionarla, tenerla, tocarla. ¿Qué sería la vida sin música? Disfrutamos de ella, con nuestra forma de ser ecléctica. 
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center ">
              <div className="card-body ">
              <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#777" />
                        <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                    </svg>
                <h3>Diseño</h3>
                <p>
                  El corazón de nuestro proyecto es el diseño. Diseño de prendas y experiencias. La creatividad es nuestro principal componente, nuestra gasolina para los diferentes proyectos.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center text-white card-cualquiera">
              <div className="card-body">
              <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#777" />
                        <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                    </svg>
                <h3>Partying</h3>
                <p>
                  Desarrollamos fiestas, reuniones y jolgorio alrededor de la música y el diseño, porque lo más importante de la vida es celebrar, los niños de Belén siempre disfrutan de la vida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
 
        </div>
 
    )
    
  }
 
}
 
export default Servicios;