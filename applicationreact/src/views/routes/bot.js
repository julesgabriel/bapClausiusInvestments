import React, {Component} from 'react';

import Header from "../../views/components/header/header";

import Footer from "../../views/components/footer/footer";

import Orders from "../components/orders/orders";

import LeftBar from "../components/leftBar/leftBar";
import Bot from "../components/bot/bot";


class BotRoute extends Component{
    render() {
        return(
            <div>
                <Header/>
                <div className="interfaceApp">
                    <LeftBar/>
                    <Bot/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default BotRoute;