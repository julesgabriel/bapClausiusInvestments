import React, {Component} from 'react';
import './presentation.css';

import AccueilSvg from '../../../assets/illustrations/accueil.svg';


class Presentation extends Component {
    render() {
        return (
            <section className="presentation">

                <div className="contentPresentation">
                    <h1>TITRE</h1>
                    <h2>contenu mes couilles</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula laoreet dui, et
                        laoreet nunc tincidunt id. Pellentesque posuere turpis purus, eget accumsan libero bibendum
                        lobortis. Proin euismod dictum dolor ut consequat. Pellentesque nec velit justo. Cras efficitur
                        id neque eget eleifend. Sed malesuada, purus ac laoreet tempor, lectus neque dapibus nisl, ac
                        pharetra nisl neque eu erat. Morbi ac rutrum ipsum.
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