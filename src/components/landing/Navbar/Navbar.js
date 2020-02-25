import React from 'react';
import { Link } from 'react-router-dom';
import Signedinlink from './Signedinlink';
import Signedout from './Signedout';
import { connect } from 'react-redux';


const Navbar = (props) => {
    const { auth } = props;
    const links = auth.uid ? <Signedinlink /> : <Signedout />;
    return(
            <div>
                { links }
            </div>
    
                 
    )
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);