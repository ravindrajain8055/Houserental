import React from 'react';
import { Nav, Navbar, Form, Button, NavDropdown, FormControl } from 'react-bootstrap';
import Background from './2.jpg';

var sectionStyle = {
  backgroundImage: `url(${Background})`
};


const Signedout = () => {
     return(
      <Navbar expand="sm" className="animated zoomInUp" style={ sectionStyle }>  
        <Navbar.Brand href="/" className="font-weight-bold text-white animated heartBeat">House-Rental</Navbar.Brand> 
        <Form inline style={{marginLeft: '250px'}} >
          <FormControl type="text" placeholder="Search" className="mr-sm-2 bg-light rounded mt-2 pl-2" style={{width:10+ "em"}} />
          <Button variant="success">Search</Button>
        </Form>
        <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="ml-auto"> 
          <Nav.Link href="/login"><Button variant="primary">Login</Button></Nav.Link>
          <Nav.Link href="/signup"><Button variant="primary">Signup</Button></Nav.Link>
          <Nav.Link href="/posts"><Button variant="warning">Sell</Button></Nav.Link>
         </Nav>
     
        </Navbar.Collapse>
      </Navbar>
  
    )
}

export default Signedout;