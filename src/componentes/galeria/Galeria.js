import React from 'react';
import Menu from '../menu/Menu';
import Titulo from '../titulo/Titulo';
import Footer from '../footer/Footer';
 
class Galeria extends React.Component {
 
  render() {
 
    return (
 
        
			<>
 
			<Menu />
			<hr></hr>
			<Titulo />
       		<hr></hr>
			<main role="main" className="flex-shrink-0 mt-5">
 
				<section className="text-center">
				    <div className="container">
				      <h1 className="jumbotron-heading">Clothing </h1>
				      <p className="lead text-muted">
					  Nuestras prendas están inspiradas en los estilos retro de los años 70's, 80's y 90's. Una mezcla de estilos y géneros musicales como la salsa, el jazz, el soul y el hip hop convirtiéndose en un crisol de muchas culturas, sonidos, formas de vestir. Es una reformación de lo clásico, de lo vintage, de todo lo que nos dejó el siglo XX.
				      </p>				      
				    </div>
                    <hr></hr>
				</section>
 
		        <div className="album py-5 bg-light">
				    <div className="container">
 
				      <div className="row">
				        <div className="col-md-4">
				          <div className="card mb-4 shadow-sm">
                          <img src={process.env.PUBLIC_URL + 'images/tkb.jpeg'}></img>					       
                             <div className="card-body">
				              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				              <div className="d-flex justify-content-between align-items-center">
				                
				              </div>
				            </div>
				          </div>
				        </div>
				        <div className="col-md-4">
				          <div className="card mb-4 shadow-sm">
                          <img src={process.env.PUBLIC_URL + 'images/tkb1.jpeg'}></img>					            <div className="card-body">
				              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				              <div className="d-flex justify-content-between align-items-center">
				                {/* <div className="btn-group">
				                  <button type="button" className="btn btn-sm btn-outline-secondary">Leer</button>				                  
				                </div> */}
				                
				              </div>
				            </div>
				          </div>
				        </div>
				        <div className="col-md-4">
				          <div className="card mb-4 shadow-sm">
                          <img src={process.env.PUBLIC_URL + 'images/tkb3.jpeg'}></img>					            <div className="card-body">
				              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				              <div className="d-flex justify-content-between align-items-center">
				       
				              </div>
				            </div>
				          </div>
				        </div>
 
				        <div className="col-md-4">
				          <div className="card mb-4 shadow-sm">
                          <img src={process.env.PUBLIC_URL + 'images/conjunto2.jpeg'}></img>					            <div className="card-body">
				              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				              <div className="d-flex justify-content-between align-items-center">
				               
				                
				              </div>
				            </div>
				          </div>
				        </div>
				        <div className="col-md-4">
				          <div className="card mb-4 shadow-sm">
                          <img src={process.env.PUBLIC_URL + 'images/conjunto.jpeg'}></img>					            <div className="card-body">
				              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				              <div className="d-flex justify-content-between align-items-center">
				           
				                
				              </div>
				            </div>
				          </div>
				        </div>
				        <div className="col-md-4">
				          <div className="card mb-4 shadow-sm">
                          <img src={process.env.PUBLIC_URL + 'images/conjunto4.jpeg'}></img>					            <div className="card-body">
				              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				              <div className="d-flex justify-content-between align-items-center">				        				                
				              </div>
				            </div>
				          </div>
				        </div>
 
				        <div className="col-md-4"> {/*Agregué más cards*/}
				          <div className="card mb-4 shadow-sm">
                          <img src={process.env.PUBLIC_URL + 'images/dragon.jpeg'}></img>					            <div className="card-body">
				              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				              <div className="d-flex justify-content-between align-items-center">                
				              </div>
				            </div>
				          </div>
				        </div>

				        <div className="col-md-4">
				          <div className="card mb-4 shadow-sm">
                              <img src={process.env.PUBLIC_URL + 'images/dragon3.jpeg'}></img>	
                               <div className="card-body">
				              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				              <div className="d-flex justify-content-between align-items-center">             
				              </div>
				            </div>
				          </div>
				        </div>

				        <div className="col-md-4">
				          <div className="card mb-4 shadow-sm">
                            <img src={process.env.PUBLIC_URL + 'images/dragon4.jpeg'}></img>					            <div className="card-body">
				              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				              <div className="d-flex justify-content-between align-items-center">
				              </div>
				            </div>
				          </div>
				        </div>

                        <div className="col-md-4">
				          <div className="card mb-4 shadow-sm">
                          <img src={process.env.PUBLIC_URL + 'images/kidsCamisa.jpeg'}></img>					            <div className="card-body">
				              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				              <div className="d-flex justify-content-between align-items-center">                
				              </div>
				            </div>
				          </div>
				        </div>
				        <div className="col-md-4">
				          <div className="card mb-4 shadow-sm">
                              <img src={process.env.PUBLIC_URL + 'images/kidsBuso.jpeg'}></img>	
                               <div className="card-body">
				              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				              <div className="d-flex justify-content-between align-items-center">             
				              </div>
				            </div>
				          </div>
				        </div>
				        <div className="col-md-4">
				          <div className="card mb-4 shadow-sm">
                            <img src={process.env.PUBLIC_URL + 'images/kidsCamisa2.jpeg'}></img>					            <div className="card-body">
				              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				              <div className="d-flex justify-content-between align-items-center">
				              </div>
				            </div>
				          </div>
				        </div>

                        <div className="col-md-4">
				          <div className="card mb-4 shadow-sm">
                          <img src={process.env.PUBLIC_URL + 'images/cincoDoce.jpeg'}></img>					            <div className="card-body">
				              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				              <div className="d-flex justify-content-between align-items-center">                
				              </div>
				            </div>
				          </div>
				        </div>
				        <div className="col-md-4">
				          <div className="card mb-4 shadow-sm">
                              <img src={process.env.PUBLIC_URL + 'images/cincoDoce2.jpeg'}></img>	
                               <div className="card-body">
				              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				              <div className="d-flex justify-content-between align-items-center">             
				              </div>
				            </div>
				          </div>
				        </div>
				        <div className="col-md-4">
				          <div className="card mb-4 shadow-sm">
                            <img src={process.env.PUBLIC_URL + 'images/cincoDoce3.jpeg'}></img>					            <div className="card-body">
				              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				              <div className="d-flex justify-content-between align-items-center">
				              </div>
				            </div>
				          </div>
				        </div>
                        <div className="col-md-4">
				          <div className="card mb-4 shadow-sm">
                          <img src={process.env.PUBLIC_URL + 'images/yo.jpeg'}></img>					            <div className="card-body">
				              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				              <div className="d-flex justify-content-between align-items-center">                
				              </div>
				            </div>
				          </div>
				        </div>
				        <div className="col-md-4">
				          <div className="card mb-4 shadow-sm">
                              <img src={process.env.PUBLIC_URL + 'images/yoEspalda.jpeg'}></img>	
                               <div className="card-body">
				              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				              <div className="d-flex justify-content-between align-items-center">             
				              </div>
				            </div>
				          </div>
				        </div>
				        <div className="col-md-4">
				          <div className="card mb-4 shadow-sm">
                            <img src={process.env.PUBLIC_URL + 'images/nianitoSolito.jpeg'}></img>					            <div className="card-body">
				              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
				              <div className="d-flex justify-content-between align-items-center">
				              </div>
				            </div>
				          </div>
				        </div>


				      </div>
				    </div>
				</div>
                                
		    
	  		</main>
 
	  		<Footer />
 
	  		</>
                
        
 
    )
    
  }
 
}

export default Galeria;