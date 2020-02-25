import React,{Component} from 'react';
import { Nav, Navbar, Form, Button, NavDropdown, FormControl } from 'react-bootstrap';
import { connect } from 'react-redux';
import { signOut } from '../../../store/actions/authActions';
import Background from './2.jpg';

var sectionStyle = {
  backgroundImage: `url(${Background})`
};

const Signedinlink = (props) => {
     const { profile } = props;
     return(
      <Navbar style={ sectionStyle } expand="sm">
        <Navbar.Brand href="/" className="font-weight-bold text-white animated heartBeat">
        HouseRental<img src="https://img.icons8.com/nolan/64/000000/sell-property.png" style={{height:"55px"}}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/posts"><Button variant="warning" className="pl-4 pr-4">Sell
            <img src="https://img.icons8.com/metro/26/000000/sell.png" className="animated zoomInDown">
              </img></Button></Nav.Link>
          </Nav>
          <Form inline action="/" method="GET" >
            <FormControl type="text" name="city" placeholder="Search" className="mr-sm-2 bg-light rounded mt-2 pl-2" style={{width:12+ "em"}} />
            <Button type="submit" variant="warning" className=" my-sm-0 ">Search
            <img src="https://img.icons8.com/android/24/000000/search.png" className="animated zoomInDown ml-1"></img></Button>
          </Form>
          <NavDropdown title={profile.firstName} id="basic-nav-dropdown" className="btn m-2 bg-secondary">
              <NavDropdown.Item href="/profile" className="animated rubberBand">View Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/editProfile" className="animated rubberBand">Edit Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={props.signOut} href="#action/3.1" className="animated rubberBand">signout</NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
     )
}

const mapStateToProps = (state) => {
  return{
      // flats: state.firebase.data,
      auth: state.firebase.auth,
      profile: state.firebase.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signedinlink);