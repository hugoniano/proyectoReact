import React from 'react';
//import './Slider.css';
 
class Slider extends React.Component {
 
  render() {
 
  	return (
 
  		<div id="slider" className="carousel slide" data-ride="carousel">
		    <ol className="carousel-indicators">
		        <li data-target="#slider" data-slide-to="0" className="active"></li>
		        <li data-target="#slider" data-slide-to="1"></li>
		        <li data-target="#slider" data-slide-to="2"></li>
		        <li data-target="#slider" data-slide-to="3"></li>
		        <li data-target="#slider" data-slide-to="4"></li>
		        <li data-target="#slider" data-slide-to="5"></li>
		        <li data-target="#slider" data-slide-to="6"></li>
		    </ol>

		    <div className="carousel-inner">
		        <div className="carousel-item active">
		            <img className="img-fluid" src={process.env.PUBLIC_URL + 'images/disco1.jpeg'} width="1150" height="80" />
		            <div className="elementos">
		                <a className="btn btn-lg btn-secondary" href="" target="_blank" role="button">Comprar</a>
		            </div>
		        </div>

		        <div className="carousel-item">
		            <img className="img-fluid" src={process.env.PUBLIC_URL + 'images/disco2.jpeg'} width="1150" height="80" />
		            <div className="elementos">
		                <a className="btn btn-lg btn-secondary" href="" target="_blank" role="button">Comprar</a>
		            </div>
		        </div>

		        <div className="carousel-item">
		            <img className="img-fluid" src={process.env.PUBLIC_URL + 'images/disco3.jpeg'} width="1150" height="80" />
		            <div className="elementos">
		                <a className="btn btn-lg btn-secondary " href="" target="_blank" role="button">Comprar</a>
		            </div>
		        </div>

		        <div className="carousel-item">
		            <img className="img-fluid" src={process.env.PUBLIC_URL + 'images/disco4.jpeg'} width="1150" height="80" />
		            <div className="elementos">
		                <a className="btn btn-lg btn-secondary " href="" target="_blank" role="button">Comprar</a>
		            </div>
		        </div>

		        <div className="carousel-item">
		            <img className="img-fluid" src={process.env.PUBLIC_URL + 'images/disco5.jpeg'} width="1150" height="80" />
		            <div className="elementos">
		                <a className="btn btn-lg btn-secondary" href="" target="_blank" role="button">Comprar</a>
		            </div>
		        </div>

		        <div className="carousel-item">
		            <img className="img-fluid" src={process.env.PUBLIC_URL + 'images/disco6.jpeg'} width="1150" height="80" />
		            <div className="elementos">
		                <a className="btn btn-lg btn-secondary " href="" target="_blank" role="button">Comprar</a>
		            </div>
		        </div>

		    </div>


		    <a className="carousel-control-prev" href="#slider" role="button" data-slide="prev">
		        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
		        <span className="sr-only">Previous</span>
		    </a>
		    <a className="carousel-control-next" href="#slider" role="button" data-slide="next">
		        <span className="carousel-control-next-icon" aria-hidden="true"></span>
		        <span className="sr-only">Next</span>
		    </a>
		</div>
 
  	)
    
  }
 
}
 
export default Slider;