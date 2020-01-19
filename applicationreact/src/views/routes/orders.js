import React, {Component} from 'react';

import Header from "../../views/components/header/header";

import Footer from "../../views/components/footer/footer";

import Orders from "../components/orders/orders";

import LeftBar from "../components/leftBar/leftBar";


class OrdersRoute extends Component{
    render() {
        return(
            <div>
                <Header/>
                <div className="interfaceApp">
                    <LeftBar/>
                    <Orders/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default OrdersRoute;