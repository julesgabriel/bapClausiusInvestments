import React, {Component} from 'react';
import './header.css';

import {Link} from 'react-router-dom'

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
                        <Link to={'/'}>
                            <li>Accueil</li>
                        </Link>
                        <Link to={'/equipe'}>
                            <li>Équipe</li>
                        </Link>
                        <Link to={'/services'}>
                            <li>Services</li>
                        </Link>
                        <Link to={'/blog'}>
                            <li>Blog</li>
                        </Link>
                    </ul>
                </nav>
                <div className="positionActions">
                    <div className="navActions">
                        <Link to={'/connexion'}><CTA className="navButtons" content="Se connecter"/></Link>
                        <Link to={'/inscription'}><CTA className="navButtons" content="S'inscrire"/></Link>
                    </div>
                </div>
                <div className="awsBarsBox" onClick={this.handleSlideLink}>
                    <FontAwesomeIcon id="burger" className="awesomeBars" icon={faBars}/>
                </div>
                <div className={this.state.slidingLink}>
                    <FontAwesomeIcon id="cross" className="faTimesTopRight " icon={faTimes}
                                     onClick={this.handleSlideLink}/>
                    <ul>
                        <div className="webPages">
                            <h4>Web Pages</h4>
                            <Link to={'/'}>
                                <li>Accueil</li>
                            </Link>
                            <Link to={'/equipe'}>
                                <li>Equipe</li>
                            </Link>
                        </div>
                        <div className="appPages">
                            <h4>App Pages</h4>
                            <Link to={'/inscription'}>
                                <li>Inscription</li>
                            </Link>
                            <Link to={'/connexion'}>
                                <li>Connexion</li>
                            </Link>
                        </div>
                    </ul>
                </div>
            </header>

        );
    }
}

export default Header