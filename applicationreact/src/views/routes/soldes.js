import React, {Component} from 'react';

import Header from "../../views/components/header/header";

import Footer from "../../views/components/footer/footer";

import Soldes from "../components/soldes/soldes";
import LeftBar from "../components/leftBar/leftBar";


class SoldesRoutes extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="interfaceApp">
                    <LeftBar/>
                    <Soldes/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default SoldesRoutes;