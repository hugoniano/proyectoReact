import React from 'react';
import {NavLink} from "react-router-dom";
//import './Menu.css';

class Menu extends React.Component {

  render() {

  	return (

  		  <nav className="navbar navbar-expand-md navbar-light bg-light">

		    <NavLink to="/" className="navbar-brand">The Kids of Belen</NavLink>
		    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
		     	<span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarCollapse">
			    <ul className="navbar-nav mr-auto">

			        <li className="nav-item">
			          	<NavLink to="/" className="nav-link">Home </NavLink>
			        </li>
			        <li className="nav-item">
			        	<NavLink to="/nosotros" className="nav-link">About us </NavLink>
			        </li>
			        <li className="nav-item">
			          	<NavLink to="/servicios" className="nav-link"> </NavLink>
			        </li>
			        <li className="nav-item">
			          	<NavLink to="/galeria" className="nav-link">Clothing </NavLink>
			        </li>
			        <li className="nav-item">
			          	<NavLink to="/contacto" className="nav-link">Contacto </NavLink>
			        </li>

			    </ul>

			    <form className="form-inline mt-2 mt-md-0">
			        <input className="form-control mr-sm-2" type="text" placeholder="Buscar" aria-label="Buscar"/>
			        <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Buscar</button>
			    </form>
		    </div>		    

		</nav>


	)
    
  }

}

export default Menu;