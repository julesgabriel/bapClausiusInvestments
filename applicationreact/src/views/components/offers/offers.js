import React, {Component} from "react";
import './offers.css';
import CTA from "../global/button/CTA";

import Liberty from '../../../assets/illustrations/offers/liberté.svg';
import Pro from '../../../assets/illustrations/offers/pro.svg';

const free = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit nisi at sem iaculis venenatis. In ullamcorper suscipit ex in commodo. Aliquam varius libero at dapibus aliquet. Nullam mattis tincidunt enim. Etiam id urna id purus rutrum pharetra. Sed feugiat est urna, in fermentum neque bibendum sit amet. Nullam eu libero neque. Fusce a ultricies elit, id dapibus urna. Cras vitae interdum eros. In euismod congue molestie. Phasellus elementum tincidunt lectus, at dictum urna luctus eu. Donec lorem turpis, vehicula vitae varius et, ullamcorper tempus velit.";
const pro = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae tellus eget odio tempus gravida sit amet a lacus. Nullam efficitur arcu in leo vehicula placerat. Suspendisse gravida nec nibh vitae hendrerit. Nulla condimentum, nulla non consectetur efficitur, sapien nulla ultricies ipsum, ut ornare libero mauris id nulla. Vivamus urna tellus, eleifend in nisl id, aliquam malesuada risus. Suspendisse dignissim nulla nec tortor venenatis ultricies. Phasellus mattis tellus justo, id eleifend metus pulvinar quis. Vivamus ut viverra velit, id pellentesque nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus.";

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
                    h2Content: "Offre Liberté",
                    content: free,
                    imgOffers: Liberty,
                    class: " "
                });
                setTimeout(() => {
                    this.setState({
                        classList: "anim"
                    })
                }, 200)
            } else if (id === "pro") {
                this.setState({
                    h2Content: "Offre Pro",
                    content: pro,
                    imgOffers: Pro,
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
                            <CTA id="free" onClick={this.handleChange} className="navButtons" content="Offre liberté"/>
                            <CTA id="pro" onClick={this.handleChange} className="navButtons" content="Offre pro"/>
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