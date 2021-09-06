import { Nav, Navbar,NavDropdown, FormControl,Form, Row,Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../_assets/img/logofcamara.png";
import "../../_assets/css/navbar.css";

function navbar() {
  return (
   
    <>
  



   <Navbar class="nav" expand="lg">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="200px"
          height="100px"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      
      

    
     
        
      
        
        
  
    <Nav className="justify-content-end" activeKey="/home">
    <button class="btn  btn_login">Login</button>
    </Nav> 
  
  
    </Container>
  </Navbar> 
</>
  );
}

export default navbar;
