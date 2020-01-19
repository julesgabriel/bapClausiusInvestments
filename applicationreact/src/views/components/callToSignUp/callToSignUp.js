import React, {Component} from 'react';
import './callToSignUp.css';

import CTA from "../global/button/CTA";

class CallToSignUp extends Component {
    render() {
        return (
            <section className="callToSignUp">
                <h2>Des conseillers financiers à votre écoute</h2>
                <span></span>
                <CTA className="navButtons" content="Inscrivez-vous !"/>

            </section>
        )
    }
}

export default CallToSignUp;