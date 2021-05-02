import React from 'react';

class Titulo extends React.Component {

    render(){
        return(

            
                <div className="container ">
                    <div className = "col-lg-12">
                        <img className="img-fluid rounded mx-auto d-block" src={process.env.PUBLIC_URL + 'images/LogoT.png'} alt="logo" width="25%" height="25%" ></img>
                    </div>             
                </div>
            
        )

    }

}

export default Titulo;

