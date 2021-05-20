import React from 'react';
import Jumbotron from '../../nosotros/jumbotron/Jumbotron';
import Slider from '../slider/Slider';

class Jumbotronhome extends React.Component {

	render() {

		return(
            <div className="container">
              <div className="jumbotron">
                <h1>Novedades vinilos</h1>
                <p> En esta sección encontrarás los últimos discos que arriban a nuestras manos y que pueden ser tuyos, escoge tu disco y dale en el botón Comprar para convertirte en un <span><i>vyniler</i></span> </p>
                <Slider/>
              </div>
            </div>
        )

	}

}

export default Jumbotronhome;