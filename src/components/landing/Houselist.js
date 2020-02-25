import React,{Component} from 'react';
import { Container,Row,Col,Dropdown,DropdownButton,Card,CardColumns,Form,FormControl,Button,CardGroup,Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class houseList extends Component{
    render(){
    if(!this.props.Flats){
        return (  
            <div  style={{position:"absolute", left:"45%",top: "35%"}}>
                    <Spinner animation="border" variant="primary" />
            </div>      
        )
    }
    else {
    return(
        <div>
            { this.props.Flats && this.props.Flats.map(flat => {
                return(
                        <Link to={'/flats/' + flat.id} key={flat.id}>                           
                            <Card style={{width:"300px"}} className="animated bounce border border-primary " >
                                <Card.Img variant="top" src={flat.url} height="175px" width="280px" className="p-2"/>
                                <Card.Body class="p-2">
                                    <Card.Title className="m-0">{flat.rent}</Card.Title>
                                    <Card.Text className="text-dark m-0" style={{fontSize:"16px"}}>{flat.info} </Card.Text>
                                    <Card.Text className="text-secondary text-truncate m-0" >{flat.details}</Card.Text>
                                    <Card.Text className="text-dark text-right text-truncate m-0" style={{fontSize:"18px"}}> {flat.address}</Card.Text>
                                    <Card.Text className="text-right text-info m-0">Posted By: {flat.userFirstName} {flat.userLastName}</Card.Text>
                                </Card.Body>
                            </Card>   
                        </Link>                     
                )
            })}
        </div>
    )
     }}
    }

export default houseList; 