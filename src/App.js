import React, { Component } from 'react';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import LandingPage from './components/landing/landing';
import Details from './components/landing/houseDetails';
import Seller from './components/seller/seller';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Profile from './components/Profile/profile';
import editProfile from './components/Profile/editProfile';
import Navbar from './components/landing/Navbar/Navbar';



class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div>
          <Navbar />
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route path='/flats/:id' component={Details} />
              <Route path='/posts' component={Seller} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={Signup} /> 
              <Route path='/profile' component={Profile} />
              <Route path='/editProfile' component={editProfile}/>
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
