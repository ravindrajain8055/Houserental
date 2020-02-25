import React from 'react';
import { Row, Container, Form, DropdownButton, FormControl, Button, Dropdown } from 'react-bootstrap';

const TopPanel = (props) => {
    return(
        <div style={{backgroundColor:"#eeeeee"}} className="rounded">
            <Row>
                <Container>
                    <div className="d-inline-block float-left ml-2">
                        <Form inline>
                           <input type="hidden" name="city" value={props.query.city} />
                            <span className=" pr-2 h4">Price: </span>
                            <FormControl type="text" placeholder="Min" name="Min" value={props.query.Min} className=" mr-sm-2" style={{width:4+ "em"}} />
                            <span>:</span>
                            <FormControl type="text" placeholder="Max" name="Max" value={props.query.Max} className=" mr-sm-2 ml-2" style={{width:4+ "em"}} />
                            <Button type="submit">Submit</Button>
                        </Form>
                    </div>                
                </Container>
                
            </Row>
        </div>
    )
}

export default TopPanel;