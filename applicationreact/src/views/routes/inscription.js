import React, {Component} from 'react';

import Header from "../../views/components/header/header";
import SignUp from "../components/signUp/signUp";
import Footer from "../../views/components/footer/footer";

class InscriptionRoute extends Component{
    render() {
        return(
            <div>
                <Header/>
                <SignUp/>
                <Footer/>
            </div>
        )
    }
}

export default InscriptionRoute;