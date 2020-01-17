import React, {Component} from 'react';

import Header from "../../views/components/header/header";
import Presentation from "../../views/components/presentation/presentation";
import Concept from "../../views/components/concept/concept";
import Offers from "../../views/components/offers/offers";
import CallToSignUp from "../../views/components/callToSignUp/callToSignUp";
import Footer from "../../views/components/footer/footer";

class Accueil extends Component{
    render() {
        return(
            <div>
                <Header/>
                <Presentation/>
                <Concept/>
                <Offers/>
                <CallToSignUp/>
                <Footer/>
            </div>
        )
    }
}

export default Accueil;