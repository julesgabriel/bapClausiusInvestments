import React, {Component} from 'react';

import Header from "../../views/components/header/header";
import Services from "../../views/components/services/services";
import Footer from "../../views/components/footer/footer";

class ServicesRoute extends Component{
    render() {
        return(
            <div>
                <Header/>
                <Services/>
                <Footer/>
            </div>
        )
    }
}

export default ServicesRoute;