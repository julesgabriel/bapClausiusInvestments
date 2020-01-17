import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.css';
import CTA from "../../global/button/CTA";


let settings;

/**
 * @class SimpleSlider permet d'importer un carousel slick slider et de définir tout ce que l'on veut dans ce dernier: <br>
 *     <a href="https://react-slick.neostack.com/docs/api/"> Voir les méthodes et props</a>
 */

class SimpleSlider extends React.Component {

    render() {
        settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
        };

        return (
            <div className="displaySlider">
                <h3>Bot de trading</h3>
                <Slider {...settings}>
                    <div>
                        <h4>Bot</h4>
                        <span>De la semaine</span>

                    </div>
                    <div>
                        <h4>Bot</h4>
                        <span>De la semaine</span>

                    </div>
                    <div>
                        <h4>Bot</h4>
                        <span>De la semaine</span>

                    </div>
                    <div>
                        <h4>Bot</h4>
                        <span>De la semaine</span>

                    </div>
                    <div>
                        <h4>Bot</h4>
                        <span>De la semaine</span>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default SimpleSlider;