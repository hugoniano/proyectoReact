import React from 'react';
 
class Jumbotron extends React.Component {
 
  render() {
 
    return (
 
  <div className="jumbotron ">
    <section className="container text-center " >
      <div className="row text-center justify-content-center align-self-center">
          <h1 className="display-3 ">Acerca de nosotros</h1>
        <div className="accordion" id="">
          <div className="card">
            <div className="card-header" >
              <h5 className="mb-0">
                <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  ¿Qué son los niños de Belén?
                </button>
              </h5>
            </div>

            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div className="card-body">
                Somos un grupo de amigos, de la ciudad de Medellín. Como nuestro nombre lo dice, especificamente del barrio Belén, donde nacimos, crecimos y hermos vivenciado la mayoría de nuestra vida. Somos artistas, estudiantes, empresarios, melómanos. Nos apasiona la música, la bohemia, la vida buena, el estilo y la elegancia. Somos un colectivo, somos una marca de ropa, somos creadores de música, esta es nuestra vida.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  ¿Cómo nacen The Kids of Belen?
                </button>
              </h5>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div className="card-body">
                Hemos trabajado juntos, The Kids, a lo largo de los años en diferentes proyectos, conociéndonos unos a otros en el proceso. Decidimos crear este conglomerado para hacer una marca de ropa fresca, nueva, inspirada en estilos antiguos y nuevos para vestir en el marco de lo que sucede en la ciudad. Nace de las ganas de compartir el conocimiento en música, en historia y en el lifestyle que nos caracteriza. 
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h5 className="mb-0">
                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  ¿Qué hacen los niños de Belén?
                </button>
              </h5>
            </div>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
              <div className="card-body">
                Para resumir lo anterior: diseñamos y hacemos prendas frescas, coleccionamos y creamos música y vivimos la buena vida. 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
 
    )
    
  }
 
}
 
export default Jumbotron;


<div className="container">
                <h1 className="display-3">Nosotros </h1>
                <p>
                    Somos una comunidad en donde fomentamos el conocimiento colectivo.
                    <br/>
                    Solo de esta manera se formarán profesionales que cambien sus vidas y tengan un mejor futuro.
                </p>
                <p><a className="btn btn-primary btn-lg" href="https://www.signosmedia.com" target="_blank" role="button">Visitar Web</a></p>
            </div>