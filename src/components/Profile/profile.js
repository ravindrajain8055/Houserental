import React, {Component} from 'react';
import Navbar from '../landing/Navbar/Navbar';
import { Container, Row , Col, Image, Card, ListGroup, Button, Nav, Jumbotron} from 'react-bootstrap';
import { connect } from 'react-redux';
import moment from 'moment';

class Profile extends Component {
    render(){
        return(
            <div>
                <Jumbotron>
                <Container>
                    
                        <Row>
                            <Col sm={4}> 
                                <Image src="/images/profile.png" roundedCircle fluid width="200px" height="200px" />
                                <Row className="pt-4"> 
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Body>
                                        <Card.Title>LINKED ACCOUNTS</Card.Title>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>GOOGLE</ListGroup.Item>
                                            <ListGroup.Item>PHONE NUMBER</ListGroup.Item>
                                            <ListGroup.Item>EMAIL</ListGroup.Item>
                                        </ListGroup>
                                        </Card.Body>
                                    </Card>
                                    <h6>Member since Year</h6>
                                </Row>  
                            </Col>
                         
                            <Col md={8}>
                                <Row>
                                    <h1>{this.props.profile.firstName} {this.props.profile.lastName}</h1>
                                </Row>   
                                <Row>
                                    <h3>Description</h3>
                                </Row>
                                <hr/>
                                <Nav.Link href="/editProfile"><Button variant="primary"
                                className="animated wobble">Edit Profile</Button></Nav.Link>
                            </Col>
                        </Row>
                    
                    
                </Container> 
                </Jumbotron>  
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Profile);