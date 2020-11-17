import React from 'React';
import { Nav,Navbar,NavDropdown } from 'react-bootstrap';
import stylecss from '../assets/styles/navbar.module.scss'
const navbar = () => {
    return(
        <div>
        <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"#FF6666"}}>
            
        <Navbar.Brand style={{fontFamily:'Kanit, sans-serif'}}>MOHUB</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="features">Home</Nav.Link>
        <Nav.Link href="product">Product</Nav.Link>
        <NavDropdown title="Menu" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#My cart">My cart</NavDropdown.Item>
        <NavDropdown.Item href="#Payment">Payment</NavDropdown.Item>
        <NavDropdown.Item href="#Accountsetting">Account setting</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="Log out">Log out</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default navbar