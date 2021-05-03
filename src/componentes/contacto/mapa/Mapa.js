import React from 'react';
 
class Mapa extends React.Component {
 
  render() {
 
    return (
 
        <div className="embed-responsive embed-responsive-4by3">
            <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.614938317385!2d-75.5779462280009!3d6.21036219802598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44282ba8ea5c95%3A0x3d746f82f871ab1e!2sParque%20de%20El%20Poblado!5e0!3m2!1ses!2sco!4v1619997774413!5m2!1ses!2sco"></iframe>
        </div>
 
    )
    
  }
 
}
 
export default Mapa;
