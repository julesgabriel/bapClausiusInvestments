import React, {Component} from 'react';



import './login.css'

import ConnexionSvg from '../../../assets/illustrations/04-seconnecter.svg';

const axios = require('axios');
const crypto = require('crypto');

class LogIn extends Component {
    handleSubmit;

    render() {

        this.handleSubmit = (event) => {
            event.preventDefault();
            let $identifier = document.getElementById('email');
            let $password = document.getElementById('password');
            const hashPwd = crypto.createHash('sha1').update($password.value).digest('hex');
            axios.get('http://localhost/bapClausiusInvestments/applicationreact/src/views/api/user.php?user=' + $identifier.value
            ).catch((err) => {
                console.log(err.response.data)
            }).then((response) => {
                let responseUser = response.data.infos[0].user;
                let responseEmail = response.data.infos[0].email;
                let responsePassword = response.data.infos[0].password;

                if($identifier.value === responseUser && hashPwd === responsePassword){
                    console.log('OK NICE');
                    localStorage.setItem("user", responseUser);
                    localStorage.setItem("email", responseEmail);
                    localStorage.setItem("password", responsePassword);
                    localStorage.setItem("connected", "true");
                    console.log(localStorage)
                }
                else{
                    alert('Les identifiants ne correspondent pas !');
                    console.log('PO NICE')
                }
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