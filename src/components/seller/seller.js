import React,{Component} from 'react';
import { Container, Form, Jumbotron, Col, Button, ProgressBar} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createList } from '../../store/actions/listactions';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {storage} from '../../Config/fbConfig';
  
  class Seller extends Component {
    state = {
        type:'',
        bedroom:'',
        bathroom:'',
        furnishing:'',
        listedBy:'',
        carpetArea:'',
        bachelorsAllowed:'',
        maintainence:'',
        floors:'',
        floorNo:'',
        carParking:'',
        facing:'',
        adTitle:'',
        address:'',
        city: '',
        details:'',
        image: null,
        url: '',
        info:'',
        rent:'',
        progress: 0,
        flatEmail:''
    };

    handleChange = (e) =>{
        console.log(this.state);
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
        this.props.createList(this.state);
        this.props.history.push('/');
    }

    fileSelectHandler = event => {
        console.log(event.target.files[0]);
        this.setState({
            image: event.target.files[0]
        })
    }

    fileUploadHandler = (e) => {
        e.preventDefault();
        const image = this.state.image;
        const name = image.name;
        const uploadTask = storage.ref('images/' + name).put(image);
        uploadTask.on('state_changed',
         (snapshot) => {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.setState({
                progress: progress
            })
        },
        (error) => {
            console.log(error);
        }, 
        () => {
            storage.ref('images').child(name).getDownloadURL().then(url => {
                this.setState({
                    image: null,
                    url: url
                })
                console.log(this.state.url);

            })
        });
    }

    render() {
      const { modal } = this.state;
      const { flat, auth } = this.props;
      return (
        
        <div> 
        <Jumbotron>
        <Container> 
            <h3>POST YOUR AD</h3>
            <div class="bordered">
                <Form >
                        <h5>INCLUDE SOME DETAILS</h5>
                        
                        <Form.Group  controlId="type">
                            <Form.Label>Type</Form.Label>
                            <Form.Control as="select" onChange={this.handleChange}>
                                <option>Choose...</option>
                                <option>Apartment</option>
                                <option>Bungalow</option>
                            </Form.Control>
                        </Form.Group>
                        
                        <Form.Row>    
                            <Form.Group as={Col}  controlId="bedroom">
                                <Form.Label>Bedrooms</Form.Label>
                                <Form.Control as="select" onChange={this.handleChange}> 
                                    <option>Choose...</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col}  controlId="bathroom">
                                <Form.Label>Bathrooms</Form.Label>
                                <Form.Control as="select" onChange={this.handleChange} >
                                    <option>Choose...</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>    

                       
                        <Form.Row>
                            <Form.Group as={Col} controlId="furnishing">
                                <Form.Label>Furnishing</Form.Label>
                                <Form.Control as="select" onChange={this.handleChange}>
                                    <option>Choose...</option>
                                    <option>Furnished</option>
                                    <option>Semi-Furnished</option>
                                    <option>Unfurnished</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="listedBy">
                                <Form.Label>Listed By</Form.Label>
                                <Form.Control as="select" onChange={this.handleChange}>
                                    <option>Choose...</option>
                                    <option>Builder</option>
                                    <option>Dealer</option>
                                    <option>Seller</option>
                                </Form.Control>
                            </Form.Group>     
                        </Form.Row>  
                        
                        <Form.Row>
                            <Form.Group as={Col} controlId="carpetArea">
                                <Form.Label>Carpet Area (ft²)*</Form.Label>
                                <Form.Control placeholder="Carpet Area" onChange={this.handleChange}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group as={Col} controlId="bachelorsAllowed">
                            <Form.Label>Bachelors Allowed</Form.Label>
                            <Form.Control as="select" onChange={this.handleChange}>
                                <option>Choose...</option>
                                <option>Yes</option>
                                <option>No</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="maintainence">
                                <Form.Label>Maintainence Monthly</Form.Label>
                                <Form.Control placeholder="Maintainence/month" onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="floors">
                                <Form.Label>Total floors</Form.Label>
                                <Form.Control placeholder="Total floors" onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="floorNo">
                                <Form.Label>Floor No</Form.Label>
                                <Form.Control placeholder="Floor No" onChange={this.handleChange}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="carParking">
                                <Form.Label>Car Parking</Form.Label>
                                <Form.Control as="select" onChange={this.handleChange}>
                                    <option>Choose...</option>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>3+</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} controlId="facing">
                                <Form.Label>Facing</Form.Label>
                                <Form.Control as="select" onChange={this.handleChange}>
                                    <option>Choose...</option>
                                    <option>East</option>
                                    <option>North</option>
                                    <option>West</option>
                                    <option>South</option>
                                    <option>North-East</option>
                                    <option>North-West</option>
                                    <option>South-East</option>
                                    <option>South-West</option>
                                </Form.Control>
                            </Form.Group>     
                        </Form.Row>

                        <Form.Group as={Col} controlId="adTitle">
                            <Form.Label>Ad Title*</Form.Label>
                            <Form.Control  onChange={this.handleChange}  />
                        </Form.Group>

                        <Form.Group as={Col} controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control  placeholder="Address"  onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control  placeholder="City"  onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="details">
                            <Form.Label>Details</Form.Label>
                            <Form.Control  onChange={this.handleChange}  />
                        </Form.Group>

                        <Form.Group as={Col} controlId="image">
                            <Form.Label>Image Upload</Form.Label>
                            <progress value={this.state.progress} max="100"/>
                            <br/>
                            <input type="file" onChange={this.fileSelectHandler}/>
                            <Button  onClick={this.fileUploadHandler}>Upload</Button>
                        </Form.Group>
    
                        <Form.Group as={Col} controlId="rent">
                            <Form.Label>Set a Price</Form.Label>
                            <Form.Control placeholder="Price"  onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="flatEmail">
                            <Form.Label>Review your profile</Form.Label>
                            <Form.Control value={auth.email} onChange={this.handleChange} readOnly/>
                        </Form.Group>    
                        
                        <Button onClick={this.handleSubmit} variant="success" type="submit"><i class="material-icons right">cloud</i>Post</Button>
                </Form>
               

            </div>    
         
        </Container>
        </Jumbotron>
        
        </div>
      );
      }
    }

const mapStateToProps = (state) =>{
    return{
        auth: state.firebase.auth
    }
}

const mapDispatchToProps =(dispatch) => {
    return{
        createList: (flat) =>dispatch(createList(flat))
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: 'flats'}
    ])
)(Seller);