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
        }
    }

    render() {

        window.addEventListener('scroll', () => {

        });

        return (
            <section className="concept">
                <h2>Titre</h2>
                <div className="positionConcept">
                    <Card title="Profilage"
                          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit nisi at sem iaculis venenatis.
                      In ullamcorper suscipit ex in commodo. Aliquam varius libero at dapibus aliquet. Nullam mattis tincidunt enim.
                      Etiam id urna id purus rutrum pharetra. Sed feugiat est urna, in fermentum neque bibendum sit amet."
                          img={Profilage} class={this.state.classConcept}/>
                    <Card title="Conseil"
                          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit nisi at sem iaculis venenatis.
                      In ullamcorper suscipit ex in commodo. Aliquam varius libero at dapibus aliquet. Nullam mattis tincidunt enim.
                      Etiam id urna id purus rutrum pharetra. Sed feugiat est urna, in fermentum neque bibendum sit amet."
                          img={Conseil} class={this.state.classConcept}/>
                    <Card title="Suivi"
                          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit nisi at sem iaculis venenatis.
                      In ullamcorper suscipit ex in commodo. Aliquam varius libero at dapibus aliquet. Nullam mattis tincidunt enim.
                      Etiam id urna id purus rutrum pharetra. Sed feugiat est urna, in fermentum neque bibendum sit amet."
                          img={Suivi} class={this.state.classConcept}/>
                </div>
            </section>

        )
    }
}

export default Concept