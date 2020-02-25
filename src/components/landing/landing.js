import React,{Component} from 'react';
import Footer from './Panels/Footer';
import Prop from './Prop'

class MainPage extends Component {
    render() {
        //console.log(this.props)
        console.log(this.props.location.search)
        let query = new URLSearchParams(this.props.location.search); 
        const queryString ={}
        for(let param of query.entries()){
            queryString[param[0]] = param[1];            
        }
        return (
            <div>    
                <Prop query={queryString}/>
                <Footer />
            </div>
        );
    }
}

export default MainPage;