import React, {Component} from 'react';
import './signUp.css';

import Register from '../../../assets/illustrations/signUp.svg';

const axios = require('axios');

class SignUp extends Component {
    handleSubmit;

    render() {

        this.handleSubmit = (event) => {
            event.preventDefault();

            const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

            let $email = document.getElementById('email');
            let $confirmEmail = document.getElementById('confirmEmail');
            let $userName = document.getElementById('username');
            let $password = document.getElementById('password');
            let $confirmPassword = document.getElementById('confirmPassword');

            if ($userName.value && $email.value && $password.value && $confirmEmail.value && $confirmPassword.value !== '') {
                if ($email.value === $confirmEmail.value) {
                    if (regex.test($password.value)) {
                        if ($password.value === $confirmPassword.value) {


                        }
                    } else {
                        alert("Votre mot de passe doit avoir: \n" +
                            "- Au moins 8 caractères\n" +
                            "- Avoir au moins une majuscule et une minuscule\n" +
                            "- Avoir un caractère spécial")
                    }
                } else {
                    alert("Les emails ne correspondent pas")
                }
            } else {
                alert('Les champs sont vides bichon')
            }
        };

        return (

            <section className="signUpSection">
                <div className="signUpBox">
                    <form method="post" onSubmit={this.handleSubmit} className="formSignUp">
                        <h1>S'inscrire</h1>
                        <span>Rejoignez l'aventure Clausius Investments en quelques clics !</span><br/>
                        <input type="email" id="email" placeholder="Email"/><br/>
                        <input type="email" id="confirmEmail" placeholder="Confirmer l'E-mail"/><br/>
                        <input type="text" id="username" placeholder="Nom d'utilisateur"/><br/>
                        <input type="password" id="password" placeholder="Mot de passe"/><br/>
                        <input type="password" id="confirmPassword" placeholder="Confirmer le mot de passe"/><br/>
                        <input type="submit" id="submitSignUp" value="Prochaine étape"/><br/>
                    </form>
                    <img src={Register} alt="S'inscrire Illustration"/>
                </div>
                <div className="interactions">
                    <span><u>CREER LE COMPTE</u></span><br/><br/>
                    <span>Vous avez déjà un compte ? Connectez-vous ici</span>
                </div>
            </section>
        )
    }
}


export default SignUp;