import React from 'react';
import data from './data';
import Homelista1 from './homelista1/Homelista1';
import Menu from '../menu/Menu';
import Footer from '../footer/Footer';
 
 
class Listaprecios extends React.Component {
 
	render() {
 
		return(
 
			<>
 
			<Menu />

			<main role="main" className="flex-shrink-0 mt-5">
              
              <Homelista1/>

           </main>
	 
		   <Footer />
 
	  		</>
 
		)
 
	}
 
}
 
 
export default Listaprecios;