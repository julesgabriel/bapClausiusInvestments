import React, {Component} from "react";
import './offers.css';
import CTA from "../global/button/CTA";

import Liberty from '../../../assets/illustrations/offers/liberté.svg';
import Pro from '../../../assets/illustrations/offers/pro.svg';

const free = "- 0€ d'abonnement mensuel \n" +
    "- Frais de passage d'ordres à\n" +
    "hauteur de 20% du bénéfice\n" +
    "- Nombre d'ordres par mois illimité\n" +
    "- Diversification du portfolio\n" +
    "de robots de trading sans limite.";

const pro = "- Abonnement mensuel de 50€ TTC\n" +
    "- Frais de passage d’ordres réduits\n" +
    "à 8% du bénéfice\n" +
    "- Nombre d’ordres par mois illimité\n" +
    "- Diversification du portfolio\n" +
    "de robots de trading sans limite";

class Offers extends Component {
    handleChange;

    constructor(props) {
        super(props);
        this.state = {
            h2Content: "Offre Liberté",
            content: free,
            imgOffers: Liberty,
            classList: "anim"
        };
    }

    render() {
        this.handleChange = (event) => {
            let id = event.target.id;
            console.log("ok");
            if (id === "free") {
                this.setState({
                    imgOffers: Liberty,
                    h2Content: "Offre Liberté",
                    content: free,
                    class: " "
                });
                setTimeout(() => {
                    this.setState({
                        classList: "anim"
                    })
                }, 200)
            } else if (id === "pro") {
                this.setState({
                    imgOffers: Pro,
                    h2Content: "Offre Pro",
                    content: pro,
                    classList: ""
                });
                setTimeout(() => {
                    this.setState({
                        classList: "anim"
                    })
                }, 200)
            }
        };

        return (
            <section className="offers">
                <div className="positionOffers">
                    <div className="adaptativContent">
                        <div className="contentOffers">
                            <h2>{this.state.h2Content}</h2>
                            <p>{this.state.content}</p>
                        </div>
                        <div className="positionOffersButtons">
                            <CTA id="pro" onClick={this.handleChange} className="navButtons" content="OFFRE PRO"/>
                            <CTA id="free" onClick={this.handleChange} className="navButtons" content="OFFRE LIBERTE"/>
                        </div>

                    </div>
                    <div className="adaptativImages">
                        <img src={this.state.imgOffers} alt="Offre"/>
                    </div>
                </div>
            </section>
        )
    }
}

export default Offers;