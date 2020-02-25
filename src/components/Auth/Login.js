import React,{Component} from 'react';
import {Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

class Login extends Component{
    
    state={
        email:'',
        password:''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
        if(this.state.email !="" && this.state.password !="" )
        this.props.history.push('/');
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    
    render(){
     
        
       const {authError} = this.props;
        return(
           <div className="container jumbotron bg-warning justify-content-center d-flex w-50 
           text-center border border-dark rounded" style={{marginTop:'50px'}}>  
               <form onSubmit={this.handleSubmit} className="white p-4 w-100 border border-dark rounded">
                <h1 className="grey-text text-darken-4 bg-light">Login</h1>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.handleChange} />
                </div>  

                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={this.handleChange} />
                </div>  
                <div className="input-field">
                    <button className="btn btn-primary text-white text-darken-4 btn-block animated zoomInUp">Login</button>
                    <div className="red-text center">
                        {authError ? <p>{authError}</p>: null}
                    </div>  
                </div>
                </form>     
           </div> 
              
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);