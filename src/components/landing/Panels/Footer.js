import React from 'react';


const Footer = () => {
    return(
        <div className="react-footer bg-dark text-white-50 pt-3 pb-2">
        <div className="m-4">
        <div className="row">
            <div className="col-md-3 col-sm-6">
                <h4>Popular Locations</h4>
                <ul className="list-unstyled">
                    <li><a href="#">Kolkata</a></li>
                    <li><a href="#">mumbai</a></li>
    
                    <li><a href="#">chennai</a></li>
                    <li><a href="#">pune</a></li>
                </ul>

            </div>
            <div className="col-md-3 col-sm-6">
                <h4>Trending Locations</h4>
                <ul className="list-unstyled">
                    <li><a href="#">Kolkata</a></li>
                    <li><a href="#">Hyderabad</a></li>
                    <li><a href="#">banglore</a></li>
                </ul>

            </div>
            <div className="col-md-3 col-sm-6">
                <h4>About us</h4>
                <h6>We are proud to be different We’re a global product and tech group.</h6>       
                <p> +20 brands. +5,000 people. One mindset.</p>

            </div>
            <div className="col-md-3 col-sm-6">
                <h4>Follow us</h4>
                <ul className="list-unstyled">
                    <li><a href="#">instagram</a></li>
                    <li><a href="#">facebook</a></li>
                    <li><a href="#">twitter</a></li>                 
                </ul>

            </div>

        </div>            
                <p className="text-center">
                    &copy;{new Date().getFullYear()} - All Rights Reserved
                </p>
        </div>
        </div>
    )
}

export default Footer;

