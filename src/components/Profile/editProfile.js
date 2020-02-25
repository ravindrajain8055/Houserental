import React, {Component} from 'react';
import { Container, Jumbotron, Form , Button, Col, Row, Image} from 'react-bootstrap';

class editProfile extends Component {
    render() {
        return(
            <div> 
                <Jumbotron>
                    <Container>
                        <Form> 
                            <Row> 
                                <Col sm={4}>
                                    <Row>
                                        <Image src="profile.png" roundedCircle fluid width="200px" height="200px" /> 
                                    </Row>
                                    <Row>
                                        <Col sm={4}>
                                            <Button variant="danger">REMOVE</Button>
                                        </Col>
                                        <Col sm={4}>
                                            <Button variant="success">CHANGE</Button>
                                        </Col>  
                                    </Row>
                                </Col>
                                <Col sm={8}>
                                    <Form.Group>
                                        <Form.Label>Basic information</Form.Label>
                                        <Form.Control placeholder="First Name"/>
                                        <Form.Control placeholder="Last Name"/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Contact information</Form.Label>
                                        <Form.Control placeholder="Email"/>
                                    </Form.Group>
                                    <Row>
                                        <Col sm={8}>
                                            <Button variant="danger">Discard</Button>
                                        </Col>
                                        <Col sm={4}>
                                            <Button variant="success">Save Changes</Button>
                                        </Col>
                                    </Row>
                                </Col>  
                            </Row>             
                        </Form>    
                    </Container>
                </Jumbotron>
            </div>
            
        )
    }
}



export default editProfile;