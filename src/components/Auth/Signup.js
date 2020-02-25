import React,{Component} from 'react';
import {signUp} from '../../store/actions/authActions';
import { connect } from 'react-redux';

class Signup extends Component{
    state={
        firstName:'',
        lastName: '',
        email:'',
        password:''
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
        if(this.state.firstName !='' && this.state.lastname !='' && this.state.email !='' && this.state.password !='')
        this.props.history.push('/');
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    
    render(){
        return(
                <div className="container jumbotron bg-warning justify-content-center d-flex w-50 
                text-center border border-dark rounded" style={{marginTop:"20px"}}>
                    <form onSubmit={this.handleSubmit} className="white p-4 w-100 border border-dark rounded">
                     <h4 className="grey-text text-darken-4 bg-light">Signup</h4>
                     <div className="input-field">
                         <label htmlFor="firstName">First Name</label>
                         <input type="text" id="firstName" onChange={this.handleChange} />
                     </div> 
                     <div className="input-field">
                         <label htmlFor="lastName">Last Name</label>
                         <input type="text" id="lastName" onChange={this.handleChange} />
                     </div> 
                     <div className="input-field">
                         <label htmlFor="email">Email</label>
                         <input type="email" id="email" onChange={this.handleChange} />
                     </div>  
                    <div className="input-field">
                         <label htmlFor="password">Password</label>
                         <input type="password" id="password" onChange={this.handleChange} />
                     </div>  
                     <div className="input-field">
                         <button className="btn btn-primary text-white text-darken-4 btn-block animated zoomInUp">Signup</button>
                     </div>
                     </form> 
     
                </div> 
        )
        }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);