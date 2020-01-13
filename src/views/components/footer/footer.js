import React, {Component} from 'react';
import './footer.css';
import CTA from "../global/button/CTA";

import ClausiusLogoEcrit from '../../../assets/logo-fondcouleur01.png';


class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="userActionsFooter">
                    <div className="newsletter">
                        <CTA className="navButtons" content="GET NEWS !"/>
                    </div>
                    <div className="signUpLogin">
                        <CTA className="navButtons" content="Se connecter"/>
                        <CTA className="navButtons" content="S'inscrire"/>
                    </div>
                </div>
                <div className="socialCgu">
                    <div className="logoFooter">
                        <img src={ClausiusLogoEcrit} alt=""/>
                    </div>
                    <div className="socialNetwork">
                        <span></span>
                        <span></span>
                    </div>
                    <div className="cguMentions">
                        <li>Mentions légales</li>
                        <li>Conditions générales d'utilisation</li>
                        <li>Plan du site</li>
                    </div>
                    <div className="copyrights">
                        Copyrights
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
