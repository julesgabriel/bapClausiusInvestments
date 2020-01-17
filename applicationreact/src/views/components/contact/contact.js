import React, {Component} from 'react';
import './contact.css';

import Contactilu from '../../../assets/illustrations/07-nouscontacter.svg';

class Contact extends Component {
    render() {
        return (
            <section className="contact">
                <h1>Contactez-nous</h1>
                <div className="contentContact">
                    <form id="contactForm">
                        <input type="email" placeholder="Email" id="email"/>
                        <input type="text" placeholder="Objet du mail" id="object"/>
                        <textarea  placeholder="Contenu" id="content"/>
                        <input type="button" placeholder="Contenu" id="submit" value="Envoyer"/>
                    </form>
                    <img src={Contactilu} alt="Contact Illustration"/>
                </div>
            </section>
        )
    }
}

export default Contact;