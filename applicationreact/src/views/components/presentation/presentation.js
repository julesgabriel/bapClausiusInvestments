import React, {Component} from 'react';
import './presentation.css';

import AccueilSvg from '../../../assets/illustrations/accueil.svg';


class Presentation extends Component {
    render() {
        return (
            <section className="presentation">

                <div className="contentPresentation">
                    <h1>Clausius Investments</h1>
                    <p>
                        Clausius investments est une start-up proposant des produits d’investissement en
                        crypto-monnaies, ouverts à tous et sans capital minimum. Clausius propose un suivi
                        personnalisé pour chaque client, une facilité d’accès et de gestion pour les
                        neophytes.
                        Notre objectif est de démocratiser l’investissement sur les cryptomonnaies. Clausius
                        développe une solution pour pouvoir investir sur le marché de la cryptomonnaie, par
                        le biais de robot de trading optant pour des stratégies de courts et moyen terme.
                    </p>
                </div>
                <div className="illuPresentation">
                    <img src={AccueilSvg} alt="Presentation Illustrations"/>
                </div>
            </section>
        );
    }
}

export default Presentation;