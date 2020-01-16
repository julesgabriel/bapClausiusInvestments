import React, {Component} from 'react';
import {AxiosInstance as axios} from "axios";


class LogIn extends Component {
    handleSubmit;

    render() {

        this.handleSubmit = () => {
            let $identifier = document.getElementById('email');
            let $password = document.getElementById('password');

            axios.get('api/connexion/', {
                identifier: $identifier.value,
                password: $password.value,
            }).then((response) =>{
                console.log(response)
            }).catch( (err) =>{
                console.log(err.response.data)
            })

        };

        return (
            <section className="signUpSection">
                <div className="signUpBox">
                    <form method="post" onSubmit={this.handleSubmit} className="formSignUp">
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
            </section>
        )
    }
}

export default LogIn;