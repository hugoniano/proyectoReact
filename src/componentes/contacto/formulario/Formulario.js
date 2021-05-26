import React from 'react';
import '../../../App.css';
 
class Formulario extends React.Component {
 
  render() {
 
    return (
 
    
      <div className="container bg-light py-5">
        <div className="row">
          <div className="col-md-12">
            <h3 className="">Contáctanos</h3>
            <p className="">
              Déjales un mensaje a los Niños de Belén, con prontitud tendrás una respuesta. 
            </p>
            <form action="" clasName="formulario">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <i className="fas fa-user input-group-text"></i>
                  <input type="text" className="form-control" placeholder="Cuál es tu nombre" aria-label="Username" aria-describedby="basic-addon1" id="nombreUsuario"></input>
                </div>
                <br></br>
                <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <i className="fas fa-envelope input-group-text"></i>
                </div>
                <input type="text" className="form-control" placeholder="Tu correo electrónico" aria-label="Username" aria-describedby="basic-addon1" id="correoUsuario"></input>
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <i className="fas fa-pencil-alt input-group-text"></i>
                </div>
                <textarea name="" cols="30" rows="10" placeholder="Qué nos querés decir" class="form-control" id="textoUsuario"></textarea>
              </div>
              
              <button type="submit" className="btn btn-secondary btn-block" onclick="infoContacto()">Enviar</button>

              </div>
            </form>
        </div>
      </div>
    </div>
  
    )
    
  }
 
}
 
export default Formulario;