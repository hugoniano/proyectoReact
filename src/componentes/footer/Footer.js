import React from 'react';
import './Footer.css'
 
class Footer extends React.Component {
 
  render() {
 
    return (
    <div  className="footer">
      <div className="container p-3 footer">
        <div className="row text-center">
          <div className="col ml-auto">
            <button className="float-right">
            <p><a href="#">HOME</a></p>
            </button>
          <p>&middot; &copy; {(new Date().getFullYear())} by The Kids of Belen Brand &middot; </p>
            {/* <p>Copyright &copy; 2021 by The Kids of Belen Brand</p> */}
          </div>
        </div>       
      </div>
    </div>        
 
    )
    
  }
 
}
 
export default Footer;