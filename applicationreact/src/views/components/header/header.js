import React, {Component} from 'react';
import './header.css';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";

import Clausius from '../../../assets/logo-idv-blanc.png'
import CTA from "../global/button/CTA";

class Header extends Component {
    handleSlideLink;

    constructor(props) {
        super(props);
        this.state = {
            slidingLink: "slidingLink none",
        };
    }

    render() {

        this.handleSlideLink = event => {
            let id = event.target.id;
            console.log(id);
            if (id === "burger") {
                this.setState({
                    slidingLink: "slidingLink flex"
                });
            } else if (id === "cross") {
                this.setState({
                    slidingLink: "slidingLink"
                });
            }

        };

        return (
            <header>
                <div className="logoClausius">
                    <img src={Clausius} alt="Logo Clausius Investment"/>
                </div>
                <nav>
                    <ul>
                        <li>Accueil</li>
                        <li>Équipe</li>
                        <li>Services</li>
                        <li>Blog</li>
                    </ul>
                </nav>
                <div className="positionActions">
                    <div className="navActions">
                        <CTA className="navButtons" content="Se connecter"/>
                        <CTA className="navButtons" content="S'inscrire"/>
                    </div>
                </div>
                <div className="awsBarsBox" onClick={this.handleSlideLink}>
                    <FontAwesomeIcon id="burger" className="awesomeBars" icon={faBars} />
                </div>
                <div className={this.state.slidingLink}>
                    <FontAwesomeIcon id="cross" className="faTimesTopRight " icon={faTimes}
                                     onClick={this.handleSlideLink}/>
                    <ul>
                        <div className="webPages">
                            <h4>Web Pages</h4>
                            <li>Accueil</li>
                            <li>Equipe</li>
                        </div>
                        <div className="appPages">
                            <h4>App Pages</h4>
                            <li>Inscription</li>
                            <li>Connexion</li>
                        </div>
                    </ul>
                </div>
            </header>

        );
    }
}

export default Header