import React, {Component} from 'react';

import Header from "../../views/components/header/header";

import Footer from "../../views/components/footer/footer";
import LogIn from "../components/logIn/login";

class Connexion extends Component{
    render() {
        return(
            <div>
                <Header/>
                <LogIn/>
                <Footer/>
            </div>
        )
    }
}

export default Connexion;