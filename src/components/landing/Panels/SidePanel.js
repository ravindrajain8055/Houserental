
import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import Background from './8.jpg';


var sectionStyle = {
    backgroundImage: `url(${Background})`
};

const SidePanel = () => {
    return(
        <div >
        <p className="p-3 mb-2 bg-light border rounded border-info text-center h2 animated zoomInDown">
        <img src="https://img.icons8.com/color/48/000000/worldwide-location.png" />Locations</p>

        <div className="navi">
         
        <div className="multi-level overflow-auto p-3 m-0"  style={ sectionStyle } >
            <div class="item border rounded p-2 mb-1" style={{background:"#4fc3f7"}}>
                <input type="checkbox" id="A" />
               
                <img src="/images/Arrow.png" className="arrow mt-4 d-inline"/>
                <label for="A" className="d-inline font-weight-bold text-white">Maharashtra</label>
                
                <ul className="rounded border border-danger text-center">
                    <li><a href="http://localhost:3000/?city=Mumbai" className="text-white font-weight-bold animated rollIn">Mumbai</a></li><hr className="m-0 bg-light"></hr><hr className="m-0"></hr>
                    <li><a href="http://localhost:3000/?city=Nagpur" className="text-white font-weight-bold animated rollIn">Nagpur</a></li><hr className="m-0 bg-light"></hr>
                    <li><a href="http://localhost:3000/?city=Nashik" className="text-white font-weight-bold animated rollIn">Nashik</a></li><hr className="m-0 bg-light"></hr>  
                    <li><a href="http://localhost:3000/?city=Navimumbai" className="text-white font-weight-bold animated rollIn">Navimumbai</a></li><hr className="m-0 bg-light"></hr>  
                    <li><a href="http://localhost:3000/?city=Pune" className="text-white font-weight-bold animated rollIn">Pune</a></li><hr className="m-0 bg-light"></hr>
                    <li><a href="http://localhost:3000/?city=Thane" className="text-white font-weight-bold animated rollIn">Thane</a></li><hr className="m-0 bg-light"></hr>  
                    <li><a href="http://localhost:3000/?city=Ulhasnagar" className="text-white font-weight-bold animated rollIn">Ulhasnagar</a></li><hr className="m-0 bg-light"></hr> 
                </ul>
                
            </div>
            <div class="item border rounded p-2 mb-1" style={{background:"#ffb300"}}>
                <input type="checkbox" id="b" />
               
                <img src="/images/Arrow.png" className="arrow mt-4 d-inline"/>
                <label for="b" className="d-inline font-weight-bold text-white">Uttar Pradesh</label>
                
                <ul className="rounded border border-danger text-center">
                    <li><a href="http://localhost:3000/?city=Agra" className="text-white font-weight-bold animated rollIn">Agra</a></li><hr className="m-0 bg-light"></hr>
                    <li><a href="http://localhost:3000/?city=Gaziabad" className="text-white font-weight-bold animated rollIn">Gaziabad</a></li><hr className="m-0 bg-light"></hr>
                    <li><a href="http://localhost:3000/?city=Lucknow" className="text-white font-weight-bold animated rollIn">Lucknow</a></li><hr className="m-0 bg-light"></hr>  
                    <li><a href="http://localhost:3000/?city=Noida" className="text-white font-weight-bold animated rollIn">Noida</a></li><hr className="m-0 bg-light"></hr>
                    <li><a href="http://localhost:3000/?city=Jhansi" className="text-white font-weight-bold animated rollIn">Jhansi</a></li><hr className="m-0 bg-light"></hr>
                    <li><a href="http://localhost:3000/?city=Varanasi" className="text-white font-weight-bold animated rollIn">Varanasi</a></li><hr className="m-0 bg-light"></hr>
                </ul>
                
            </div>
            <div class="item border rounded p-2 mb-1" style={{background:"#4fc3f7"}}>
                <input type="checkbox" id="c" />
               
                <img src="/images/Arrow.png" className="arrow mt-4 d-inline"/>
                <label for="c" className="d-inline font-weight-bold text-white">Punjab</label>
                
                <ul className="rounded border border-danger text-center">
                    <li><a href="http://localhost:3000/?city=Amritsar" className="text-white font-weight-bold animated rollIn">Amritsar</a></li><hr className="m-0 bg-light"></hr>
                    <li><a href="http://localhost:3000/?city=Jalandar" className="text-white font-weight-bold animated rollIn">Jalandar</a></li><hr className="m-0 bg-light"></hr>
                    <li><a href="http://localhost:3000/?city=Ludhiana" className="text-white font-weight-bold animated rollIn">Ludhiana</a></li><hr className="m-0 bg-light"></hr> 
                    <li><a href="http://localhost:3000/?city=Mohali" className="text-white font-weight-bold animated rollIn">Mohali</a></li><hr className="m-0 bg-light"></hr>

                </ul>
                
            </div>
            <div class="item border rounded p-2 mb-1" style={{background:"#ffab00"}}>
                <input type="checkbox" id="d" />
               
                <img src="/images/Arrow.png" className="arrow mt-4 d-inline"/>
                <label for="d" className="d-inline font-weight-bold text-white">Gujurat</label>
                
                <ul className="rounded border border-danger text-center">
                    <li><a href="http://localhost:3000/?city=Ahmedabad" className="text-white font-weight-bold animated rollIn">Ahmedabad</a></li><hr className="m-0 bg-light"></hr>
                    <li><a href="http://localhost:3000/?city=Surat" className="text-white font-weight-bold animated rollIn">Surat</a></li><hr className="m-0 bg-light"></hr>
                    <li><a href="http://localhost:3000/?city=Rajkot" className="text-white font-weight-bold animated rollIn">Rajkot</a></li><hr className="m-0 bg-light"></hr>  
                    <li><a href="http://localhost:3000/?city=Vadodra" className="text-white font-weight-bold animated rollIn">Vadodra</a></li><hr className="m-0 bg-light"></hr>

                </ul>
                
            </div>
            <div class="item border rounded p-2 mb-1" style={{background:"#4fc3f7"}}>
                <input type="checkbox" id="e" />
               
                <img src="/images/Arrow.png" className="arrow mt-4 d-inline"/>
                <label for="e" className="d-inline font-weight-bold text-white">Karnataka</label>
                
                <ul className="rounded border border-danger text-center">
                    <li><a href="http://localhost:3000/?city=Bengaluru" className="text-white font-weight-bold animated rollIn">Bengaluru</a></li><hr className="m-0 bg-light"></hr>
                    <li><a href="http://localhost:3000/?city=Mengaluru" className="text-white font-weight-bold animated rollIn">Mengaluru</a></li><hr className="m-0 bg-light"></hr>
                    <li><a href="http://localhost:3000/?city=Mysuru" className="text-white font-weight-bold animated rollIn">Mysuru</a></li><hr className="m-0 bg-light"></hr>  
                </ul>
                
            </div>
            <div class="item border rounded p-2 mb-1" style={{background:"#ffab00"}}>
                <input type="checkbox" id="f" />
               
                <img src="/images/Arrow.png" className="arrow mt-4 d-inline"/>
                <label for="f" className="d-inline font-weight-bold text-white">Kerela</label>
                
                <ul className="rounded border border-danger text-center">
                    <li><a href="#" className="text-white font-weight-bold animated rollIn">Kochi</a></li><hr className="m-0 bg-light"></hr>
                    <li><a href="#" className="text-white font-weight-bold animated rollIn">Kozhikode</a></li><hr className="m-0 bg-light"></hr>
                    <li><a href="#" className="text-white font-weight-bold animated rollIn">Thiruvananthapuram</a></li><hr className="m-0 bg-light"></hr>  
                </ul>
                
            </div>
            <div class="item border rounded p-2 mb-1" style={{background:"#4fc3f7"}}>
                <input type="checkbox" id="g" />
               
                <img src="/images/Arrow.png" className="arrow mt-4 d-inline"/>
                <label for="g" className="d-inline font-weight-bold text-white">Madhya Pradesh</label>
                
                <ul className="rounded border border-danger text-center">
                    <li><a href="#" className="text-white font-weight-bold animated rollIn">Bhopal</a></li><hr className="m-0 bg-light"></hr>
                    <li><a href="#" className="text-white font-weight-bold animated rollIn">Indore</a></li><hr className="m-0 bg-light"></hr>
                </ul>
                
            </div>
            <div class="item border rounded p-2 mb-1" style={{background:"#ffab00"}}>
                <input type="checkbox" id="h" />
               
                <img src="/images/Arrow.png" className="arrow mt-4 d-inline"/>
                <label for="h" className="d-inline font-weight-bold text-white">Rajasthan</label>
                
                <ul className="rounded border border-danger text-center">
                    <li><a href="#" className="text-white font-weight-bold animated rollIn">Jaipur</a></li><hr className="m-0 bg-light"></hr>
                    <li><a href="#" className="text-white font-weight-bold animated rollIn">Kota</a></li><hr className="m-0 bg-light"></hr>
                </ul>
                
            </div>
            <div class="item border rounded p-2 mb-1" style={{background:"#4fc3f7"}}>
                <input type="checkbox" id="i" />
               
                <img src="/images/Arrow.png" className="arrow mt-4 d-inline"/>
                <label for="i" className="d-inline font-weight-bold text-white">Tamil Nadu</label>
                
                <ul className="rounded border border-danger text-center">
                    <li><a href="#" className="text-white font-weight-bold animated rollIn">Chennai</a></li><hr className="m-0 bg-light"></hr>
                    <li><a href="#" className="text-white font-weight-bold animated rollIn">Coimbatore</a></li><hr className="m-0 bg-light"></hr>
                    <li><a href="#" className="text-white font-weight-bold animated rollIn">Madurai</a></li><hr className="m-0 bg-light"></hr>  
                </ul>
                
            </div>
            <div class="item border rounded p-2 mb-1" style={{background:"#ffab00"}}>
                <input type="checkbox" id="j" />
               
                <img src="/images/Arrow.png" className="arrow mt-4 d-inline"/>
                <label for="j" className="d-inline font-weight-bold text-white">Andhra Pradesh</label>
                
                <ul className="rounded border border-danger text-center">
                    <li><a href="#" className="text-white font-weight-bold animated rollIn">MajorCities</a></li><hr className="m-0 bg-light"></hr> 
                </ul>
                
            </div>
            <div class="item border rounded p-2 mb-1" style={{background:"#4fc3f7"}}>
                <input type="checkbox" id="k" />
               
                <img src="/images/Arrow.png" className="arrow mt-4 d-inline"/>
                <label for="k" className="d-inline font-weight-bold text-white">Assam</label>
                
                <ul className="rounded border border-danger text-center">
                    <li><a href="#" className="text-white font-weight-bold animated rollIn">MajorCities</a></li><hr className="m-0 bg-light"></hr> 
                </ul>
                
            </div>
            <div class="item border rounded p-2 mb-1" style={{background:"#ffab00"}}>
                <input type="checkbox" id="l" />
               
                <img src="/images/Arrow.png" className="arrow mt-4 d-inline"/>
                <label for="l" className="d-inline font-weight-bold text-white">Bihar</label>
                
                <ul className="rounded border border-danger text-center">          
                  <li><a href="#" className="text-white font-weight-bold animated rollIn">MajorCities</a></li><hr className="m-0 bg-light"></hr>
                </ul>
                
            </div>
            <div class="item border rounded p-2 mb-1" style={{background:"#4fc3f7"}}>
                <input type="checkbox" id="m" />
               
                <img src="/images/Arrow.png" className="arrow mt-4 d-inline"/>
                <label for="m" className="d-inline font-weight-bold text-white">Chhatisgarh</label>
                
                <ul className="rounded border border-danger text-center">
                    <li><a href="#" className="text-white font-weight-bold animated rollIn">MajorCities</a></li><hr className="m-0 bg-light"></hr>
                </ul>
                
            </div>
            <div class="item border rounded p-2 mb-1" style={{background:"#ffab00"}}>
                <input type="checkbox" id="n" />
               
                <img src="/images/Arrow.png" className="arrow mt-4 d-inline"/>
                <label for="n" className="d-inline font-weight-bold text-white">Delhi</label>
                
                <ul className="rounded border border-danger text-center">
                    <li><a href="#" className="text-white font-weight-bold animated rollIn">Delhi</a></li><hr className="m-0 bg-light"></hr>
                </ul>
                
            </div>
            <div class="item border rounded p-2 mb-1" style={{background:"#4fc3f7"}}>
                <input type="checkbox" id="o" />
               
                <img src="/images/Arrow.png" className="arrow mt-4 d-inline"/>
                <label for="o" className="d-inline font-weight-bold text-white">Jharkhand</label>
                
                <ul className="rounded border border-danger text-center">
                    <li><a href="#" className="text-white font-weight-bold animated rollIn">MajorCities</a></li><hr className="m-0 bg-light"></hr>
                </ul>
                
            </div>
            <div class="item border rounded p-2 mb-1" style={{background:"#ffab00"}}>
                <input type="checkbox" id="p" />
               
                <img src="/images/Arrow.png" className="arrow mt-4 d-inline"/>
                <label for="p" className="d-inline font-weight-bold text-white">Odisha</label>
                
                <ul className="rounded border border-danger text-center">
                    <li><a href="#" className="text-white font-weight-bold animated rollIn">MajorCities</a></li><hr className="m-0 bg-light"></hr>  
                </ul>
                
            </div>
            <div class="item border rounded p-2 mb-1" style={{background:"#4fc3f7"}}>
                <input type="checkbox" id="q" />
               
                <img src="/images/Arrow.png" className="arrow mt-4 d-inline"/>
                <label for="q" className="d-inline font-weight-bold text-white">Telengana</label>
                
                <ul className="rounded border border-danger text-center">
                    <li><a href="#" className="text-white font-weight-bold animated rollIn">MajorCities</a></li><hr className="m-0 bg-light"></hr>
                </ul>
                
            </div>
            <div class="item border rounded p-2 mb-1" style={{background:"#ffab00"}}>
                <input type="checkbox" id="r" />
               
                <img src="/images/Arrow.png" className="arrow mt-4 d-inline"/>
                <label for="r" className="d-inline font-weight-bold text-white">Uttaranchal</label>
                
                <ul className="rounded border border-danger text-center">
                    <li><a href="#" className="text-white font-weight-bold animated rollIn">MajorCities</a></li><hr className="m-0 bg-light"></hr>            
                </ul>
                
            </div>
        </div>
        
    </div>
</div>
)}

export default SidePanel;