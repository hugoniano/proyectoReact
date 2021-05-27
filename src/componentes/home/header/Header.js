import React from 'react';
import './Header.css';


class Header extends React.Component {

    render(){
        return(

            <>

        <div className="header">
            <div className="container header">
               <div className= "row d-flex h-100">
                <div className="col-md-6 text-center text-white justify-content-center align-self-center">
                        <h1>
                The Kids of Belen.
                        </h1>
                        <p>Bienvenido a un estilo de vida, nuestra marca de ropa y la música. Somos un colectivo de la ciudad de Medellín dedicado a la elaboración de prendas ambientadas en un estilo retro, neoyorkino y muy fresco. Amamos la música y los vinilos. Queremos darle un nuevo aire a lo vintage con lo moderno.</p>
                        <a href="#/Nosotros" class="btn btn-outline-secondary btn-lg text-white">
                Leer más
              </a>
              </div>
                    <div className="col-md-6 text-center  justify-content-center align-self-center">
                        <img src={process.env.PUBLIC_URL + 'images/ropa1.jpg'}></img>
                    </div>
                </div>
            </div>
        </div>
            
            </>
                      
        )

    }

}

export default Header;





