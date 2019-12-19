import React, {Component} from 'react';
import './concept.css';
import Card from "./contentCard/card";

class Concept extends Component {
    render() {
        return (
            <section className="concept">
                <h2>Titre</h2>
                <div className="positionConcept">
                    <Card title="Profilage"
                          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit nisi at sem iaculis venenatis.
                      In ullamcorper suscipit ex in commodo. Aliquam varius libero at dapibus aliquet. Nullam mattis tincidunt enim.
                      Etiam id urna id purus rutrum pharetra. Sed feugiat est urna, in fermentum neque bibendum sit amet."/>
                    <Card title="Conseil"
                          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit nisi at sem iaculis venenatis.
                      In ullamcorper suscipit ex in commodo. Aliquam varius libero at dapibus aliquet. Nullam mattis tincidunt enim.
                      Etiam id urna id purus rutrum pharetra. Sed feugiat est urna, in fermentum neque bibendum sit amet."/>
                    <Card title="Suivi"
                          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit nisi at sem iaculis venenatis.
                      In ullamcorper suscipit ex in commodo. Aliquam varius libero at dapibus aliquet. Nullam mattis tincidunt enim.
                      Etiam id urna id purus rutrum pharetra. Sed feugiat est urna, in fermentum neque bibendum sit amet."/>
                </div>
            </section>

        )
    }
}

export default Concept