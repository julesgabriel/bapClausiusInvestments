import React, {Component} from 'react';

import './services.css';
import CTA from "../global/button/CTA";
import Cards from "../questions/cards/cards";

class Services extends Component {
    render() {
        return (
            <section className="services">
                <h1>Nos services</h1>
                <div className="boxServices">
                    <div className="part">
                        <div className="contentServices">
                            <h3>Service principal</h3>
                            <p>- Il est activable et désactivable
                                à souhait <br/>
                                - Il permet de placer l’argent
                                directement sur
                                les crypto-monnaies prédéfiniesbr <br/>
                                - Paramétrable en fonction du type
                                d’investissement choisibr <br/>
                                - Il peut déposer les fonds
                                directement vers la plateforme
                                d’échange <br/>
                                - Adaptable à chaque client grâce
                                au questionnaire de profilage</p>
                        </div>
                        <div className="callToAction">
                            <CTA id="discover" content="Découvrir nos offres"/>
                        </div>
                    </div>
                    <div className="part">
                        <div className="contentServices">
                            <h3>Service complémentaire</h3>
                            ACHAT/VENTE

                            Permet de gérer les différentes devises appartenant aux clients pas d’ajout de technologie
                            en
                            plus
                            <br/><br/>
                            Tarifs :<br/> 1,5% de la somme échangée
                        </div>
                        <div className="callToAction">
                            <CTA id="Achat" content="Achat"/>
                            <CTA id="Vente" content="Vente"/>
                        </div>

                    </div>

                </div>

            </section>
    )
    }
    }

    export default Services;