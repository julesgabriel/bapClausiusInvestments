import React, {Component} from 'react';
import './footer.css';
import CTA from "../global/button/CTA";

import {Link} from 'react-router-dom'

import ClausiusLogoEcrit from '../../../assets/logo-fondcouleur01.png';

import Facebook from '../../../assets/illustrations/social-networks/fcb-02.svg'
import LinkedIn from '../../../assets/illustrations/social-networks/linkedin-01.svg'


class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="userActionsFooter">
                    <div className="newsletter">
                        <CTA className="navButtons" content="Tenez-vous au courant !"/>
                    </div>
                    <div className="signUpLogin">
                        <Link to={'/connexion'}><CTA className="navButtons" content="Se connecter"/></Link>
                            <Link to={'/inscription'}><CTA className="navButtons" content="S'inscrire"/></Link>
                    </div>
                </div>
                <div className="socialCgu">
                    <div className="logoFooter">
                        <img src={ClausiusLogoEcrit} alt=""/>
                    </div>
                    <div className="socialNetwork">
                        <img src={Facebook} alt="logo Facebook"/>
                        <img src={LinkedIn} alt="logo LinkedIn"/>
                    </div>
                    <div className="cguMentions">
                        <Link to={'/mentionslegales'}><li>Mentions légales</li></Link>
                        <Link to={'/termsofuse'}><li>Conditions générales d'utilisation</li></Link>
                        <Link to={'/plandusite'}><li>Plan du site</li></Link>
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
