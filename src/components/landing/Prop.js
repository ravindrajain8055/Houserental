import React,{Component} from 'react';
import { Container,Row,Col,Dropdown,DropdownButton,Card,Form,FormControl,Button,CardColumns,CardGroup,CardDeck,Jumbotron, Spinner} from 'react-bootstrap';
import Houselist from './Houselist';
import SidePanel from './Panels/SidePanel';
import TopPanel from './Panels/TopPanel';
import { connect } from 'react-redux'
import { firestoreConnect} from 'react-redux-firebase'
import { compose }from 'redux'
import Background from './5.jpg';
import { tsThisType } from '@babel/types';


var sectionStyle = {
    backgroundImage: `url(${Background})`
  };

class Prop extends Component{
    render(){ 
      let sortedFlats = (<div  style={{position:"absolute", left:"45%",top: "35%"}}>
                        <Spinner animation="border" variant="primary" />
                         </div>)      
    let { flats } = this.props;    
    if(flats){
     let sortedflats=[] ;

     if(this.props.query.city){
        sortedflats = flats.filter(flat => flat.city == this.props.query.city);  
        sortedFlats=(
              <Row style={ sectionStyle} className="pl-3">
              <CardColumns style={{width: "1200px",padding:"1px"}}>
                      <Houselist Flats = {sortedflats}/>
              </CardColumns>
          </Row>
           )  

        if(this.props.query.Min || this.props.query.Max){ 
             if(this.props.query.Min && this.props.query.Max){       
            sortedflats = sortedflats.filter(flat => Number(flat.rent) >= this.props.query.Min && Number(flat.rent) <= this.props.query.Max);
            sortedFlats=(
                <Row style={ sectionStyle} className="pl-3">
                <CardColumns style={{width: "1200px",padding:"1px"}}>
                        <Houselist Flats = {sortedflats}/>
                </CardColumns>
            </Row>
             )
            }
         }
        }

     else{ 
        sortedFlats= (
                        <Row style={ sectionStyle} className="pl-3">
                            <CardColumns style={{width: "1200px",padding:"1px"}} >
                                    <Houselist Flats = {flats}/>
                            </CardColumns>
                        </Row>
                    )
                }
 }
        
      return(
    <div>
        <div className="row">
            <div className="col-sm-3 p-4">
                <SidePanel />
            </div>
            <div className="col-sm-9 p-4">
                <TopPanel query = {this.props.query} ></TopPanel>
                {sortedFlats}
            </div>
        </div>
    </div>
      )  
    }
} 

const mapStateToProps = (state) =>{
    return{
        flats: state.firestore.ordered.flats,
        
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection : 'flats' }
    ])
)(Prop);