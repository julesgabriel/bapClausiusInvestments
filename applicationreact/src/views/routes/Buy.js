import React, {Component} from 'react';

import Header from "../../views/components/header/header";

import Footer from "../../views/components/footer/footer";
import Buy from "../components/buy/buy";
import LeftBar from "../components/leftBar/leftBar";

class BuyRoutes extends Component{
    render() {
        return(
            <div>
                <Header/>
                <div className="interfaceApp">
                    <LeftBar/>
                    <Buy/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default BuyRoutes;