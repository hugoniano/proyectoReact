import React from 'react';
 
 
class Footer extends React.Component {
 
  render() {
 
    return (
      
      <div class="container p-3">
        <div class="row text-center">
          <div class="col ml-auto">
          <p className="float-right"><a href="#">Volver a página principal</a></p>
          <p>&middot; &copy; {(new Date().getFullYear())} by The Kids of Belen Brand &middot; </p>
            {/* <p>Copyright &copy; 2021 by The Kids of Belen Brand</p> */}
          </div>
        </div>       
    </div>
        
 
    )
    
  }
 
}
 
export default Footer;