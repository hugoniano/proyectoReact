import React from 'react';

import Menu from '../menu/Menu';
import Servicios from './servicios/Servicios';
import Jumbotronhome from './jumbotronhome/Jumbotronhome';
import Titulo from '../titulo/Titulo';
import Header from './header/Header';
import Footer from '../footer/Footer';

class Home extends React.Component {

	render() {

		return(

			<>

			<Menu />
			<hr></hr>
			<Titulo />
			<hr></hr>
			<Header/>
			<hr></hr>

			<main role="main" className="flex-shrink-0 mt-5">

		        <div className="container">
		  	  		
		  	  		{/* <Slider />
						<hr className="featurette-divider" />
 */}
		  	  		<Servicios />
						<hr className="featurette-divider" />

		  	  		<Jumbotronhome />

		  	  		<hr className="featurette-divider" />

		        </div>

	  		</main>

	  		<Footer />

	  		</>

		)

	}

}

export default Home;