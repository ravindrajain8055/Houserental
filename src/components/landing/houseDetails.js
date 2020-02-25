import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Spinner } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Footer from './Panels/Footer';
import moment from 'moment';
import Background from './5.jpg';

var sectionStyle = {
    backgroundImage: `url(${Background})`
  };


const Housedetails = (props) => {
    // console.log(props);
    const { flat , auth } = props;
    console.log(props);
    if(!auth.uid) return <Redirect to='/login' />
        if(flat){
            let flatemail = flat.flatEmail;
            return(
                <div style={ sectionStyle }>
                <div className="p-5">
                    
                    <div className="row">
                        <div className="col-lg-7 col-md-8">
                        <div className="card border border-warning rounded ">
                                <div className="card-body">
                                <img src={ flat.url } className="w-100 " style={{height:"369px"}} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-4">
                            <div className="card border border-secondary">
                                <div className="card-body">
                                    <h3 class="animated pulse">Posted By: {flat.userFirstName} {flat.userLastName}</h3>
                                    <div>{moment(flat.createdAt.toDate()).calendar()}</div>
                                    <a id="mail" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=rushi.shinde1999@gmail.com" className="btn btn-block btn-primary">
                                        Send Email
                                        {/* <button className="btn btn-block btn-primary">Mail Seller({flat.flatEmail})</button> */}
                                    </a>
                                </div>
                            </div>
                            <div className="card border-secondary border">
                                <div className="card-body">
                                    <p className="p-3 mb-2 bg-light border rounded border-secondary text-center h2 animated heartBeat"><img src="https://img.icons8.com/color/48/000000/details-pane.png" />Details</p>                                  
                                    <p className="card-title font-weight-bold">Rent: { flat.rent }</p>
                                    <p><span className="text-secondary">Address: </span>{ flat.address }</p>
                                    <p><span className="text-secondary">Info: </span>{ flat.info }</p>
                                    <p><span className="text-secondary">Moreinfo: </span>{ flat.details }</p>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                    <div className="card border border-secondary">
                        <div className="card-body text-center">
                            <h3 className="font-weight-bold animated pulse">Description</h3>
                            <div className="row card-footer m-3 rounded">
                                <div className="col border border-secondary m-3 p-3">
                                    <p><span className="text-secondary">Ad Title: </span>{ flat.adTitle }</p>
                                    <p><span className="text-secondary">bachelors: </span>{ flat.bachelor }</p>
                                    <p><span className="text-secondary">Bathrooms: </span>{ flat.bathroom }</p>
                        <p><span className="text-secondary">Facing: </span>{ flat.facing }</p>
                        <p><span className="text-secondary">Furnishing: </span>{ flat.furnishing }</p>

                                    

                                </div>
                                <div className="col border border-secondary m-3 p-3">
                        <p><span className="text-secondary">Bedrooms: </span>{ flat.bedroom }</p>
                        <p><span className="text-secondary">Car Parking: </span>{ flat.carParking }</p>
                        <p><span className="text-secondary">Carpet Area: </span>{ flat.carpetArea }</p>
                        <p><span className="text-secondary">Floor No: </span>{ flat.floorNo }</p>
                        <p><span className="text-secondary">Type: </span>{ flat.apartment }</p>

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <Footer />
                </div>
               
            )
        }else{
            return(
                <div>
                    <p>Loading ...</p>
                </div>
            )    
        }     
}

const mapStateToProps = (state , ownProps) => {
    //  console.log(state);
    const id = ownProps.match.params.id;
    const flats = state.firestore.data.flats;
    const flat = flats ? flats[id] : null;
    return{
        flat: flat,
        auth: state.firebase.auth,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'flats'}
    ])
)(Housedetails);