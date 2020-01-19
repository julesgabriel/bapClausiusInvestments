import React, {Component} from 'react';
import './concept.css';
import Card from "./contentCard/card";

import Profilage from '../../../assets/illustrations/concept/picto-profilage.svg'
import Suivi from '../../../assets/illustrations/concept/picto-suivi.svg'
import Conseil from '../../../assets/illustrations/concept/picto-conseils.svg';

class Concept extends Component {

    constructor(props) {
        super(props);
        this.state = {
            classConcept: 'conceptCard',
        };
        this.refOnScroll = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('scroll', this.addClass)
    }

    addClass = () => {
        let url = window.location.href;
        console.log(url);
        if(window.location.href === "http://localhost:3000/"){
            let heightBound = window.innerHeight;
            if (window.scrollY + heightBound >= this.refOnScroll.current.offsetTop) {
                this.setState({
                    classConcept: 'conceptCard opacity'
                })
            }
        }else{
            console.log('pas de soucis');
        }

    };

    render() {
        return (
            <section className="concept">
                <h2>Nos Produits d'investissements</h2>
                <div ref={this.refOnScroll} className="positionConcept">
                    <Card title="Profilage"
                          content=" Pour parvenir à vous comprendre ainsi que de satisfaire
                                    votre demande voici un questionnaire nous permettant
                                    de comprendre vos attentes.
                                    Vous comme vos projets sont unique. Vous serez
                                    encadrés par nos professionnels du début jusqu'à la fin."
                          img={Profilage} class={this.state.classConcept}/>
                    <Card title="Conseil"
                          content=" Pour tous leurs clients, Clausius apportera un
                                    accompagnement tout au long du
                                    processus d’investissement, étape par étape.
                                    Ainsi Clausius veut collaborer avec ses client en toute
                                    confiance et transparence de leur activité."
                          img={Conseil} class={this.state.classConcept}/>
                    <Card title="Suivi"
                          content=" Et si cette année, nous prenions soin de vous et de
                                    votre épargne ? Nos équipes vous accompagneront
                                    dans tous vos projets ainsi que dans vos investissements
                                    pour permettre la bonne tenue et surtout la bonne
                                    performance de vos portefeuilles financiers sur le long
                                    terme."
                          img={Suivi} class={this.state.classConcept}/>
                </div>
            </section>

        )
    }
}

export default Concept