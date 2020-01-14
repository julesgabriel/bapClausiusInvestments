import React, {Component} from 'react';
import './header.css';
import Clausius from '../../../assets/logo-idv-blanc.png'
import CTA from "../global/button/CTA";


class Header extends Component {
    render() {

        return (
            <header>
                <div className="logoClausius">
                    <img src={Clausius} alt="Logo Clausius Investment"/>
                </div>
                <nav>
                    <ul>
                        <li>Accueil</li>
                        <li>Équipe</li>
                    </ul>
                </nav>
                <div className="positionActions">
                    <div className="navActions">
                        <CTA className="navButtons" content="Se connecter"/>
                        <CTA className="navButtons" content="S'inscrire"/>
                    </div>
                </div>
            </header>

        );
    }
}

export default Header