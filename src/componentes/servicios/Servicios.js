import React from 'react';
 
import Menu from '../menu/Menu';
import Titulo from '../titulo/Titulo';
import Footer from '../footer/Footer';
import Slider from '../home/slider/Slider';
 
 
class Servicios extends React.Component {
 
	render() {
 
		return(
 
			<>
 
			<Menu />
			<hr></hr>
			<Titulo />
       		<hr></hr>
			<div className= 'container'>
			<Slider/>
			</div>
			
	  		<Footer/>
 
	  		</>
 
		)
 
	}
 
}
 
export default Servicios;