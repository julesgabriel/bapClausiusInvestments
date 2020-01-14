import React, {Component} from 'react';
import './callToSignUp.css';

import CTA from "../global/button/CTA";

class CallToSignUp extends Component {
    render() {
        return (
            <section className="callToSignUp">
                <h2>Titre</h2>
                <CTA className="navButtons" content="Inscrivez-vous !"/>

            </section>
        )
    }
}

export default CallToSignUp;