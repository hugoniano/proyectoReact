import React from 'react';
 
import Menu from '../menu/Menu';
import Jumbotron from './jumbotron/Jumbotron'; 
import Detalles from './detalles/Detalles'; 
import Footer from '../footer/Footer';
import Titulo from '../titulo/Titulo';
 
class Nosotros extends React.Component {
 
	render() {
 
		return(
 
			<>
 
			<Menu />
			<hr></hr>
			<Titulo/>
			
			<main role="main" className="flex-shrink-0 mt-5">
		        
				<Jumbotron />  
				<Detalles /> 
	  		</main>
 
	  		<Footer />
 
	  		</>
 
		)
 
	}
 
}
 
export default Nosotros