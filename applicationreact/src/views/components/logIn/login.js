import React, {Component} from 'react';
import {AxiosInstance as axios} from "axios";

import './login.css'

import ConnexionSvg from '../../../assets/illustrations/04-seconnecter.svg';

class LogIn extends Component {
    handleSubmit;

    render() {

        this.handleSubmit = (event) => {
            event.preventDefault();
            let $identifier = document.getElementById('email');
            let $password = document.getElementById('password');

            axios.get('api/connexion/', {}).catch((err) => {
                console.log(err.response.data)
            }).then((response) => {
                console.log(response);

            });

            const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            let generatedNumber = [];
            for (let i = 0; i <= 6; i++) {
                let rand = Math.floor(Math.random() * number.length);
                let generatedAuthentification = [];
                generatedAuthentification.push(rand);
            }
        };

        return (
            <section className="signUpSection">
                <div className="allPart">
                    <div className="leftPart">
                        <div className="signUpBox">
                            <form onSubmit={this.handleSubmit} className="formSignUp">
                                <h1>Se connecter</h1>
                                <br/>
                                <input type="text" id="email" placeholder="Nom d'utilisateur ou Email"/><br/>
                                <input type="password" id="password" placeholder="Mot de passe"/><br/>
                                <input type="submit" id="submitSignUp" value="Connexion"/><br/>
                            </form>
                        </div>
                        <div className="interactions">
                            <span>Mot de passe oublié ? Cliquez-ici</span>
                        </div>
                    </div>
                    <div className="rightPart">
                        <img src={ConnexionSvg} alt="Connexion Illustration"/>
                    </div>
                </div>

            </section>
        )
    }
}

export default LogIn;