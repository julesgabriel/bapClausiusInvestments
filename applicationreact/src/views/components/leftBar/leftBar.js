import React, {Component} from 'react';

import './leftBar.css'
import {Link} from 'react-router-dom'

class LeftBar extends Component {
    changeBackground;

    constructor(props) {
        super(props);
        this.state = {
            firstLiClass: '',
            secondLiClass: '',
            thirdLiClass: '',
            fourthLiClass: '',
        };

        this.refOnScroll = React.createRef();
    }


    componentDidMount() {
        if (localStorage.connected !== "true") {
            window.location.href = "http://localhost:3000"
        } else {
            this.changeBackground()
        }
    }

    render() {

        this.changeBackground = () => {
            let url = window.location.href;
            switch (url) {
                case "http://localhost:3000/app/ordres":
                    this.setState({firstLiClass: 'background'});
                    break;

                case "http://localhost:3000/app/transactions":
                    this.setState({secondLiClass: 'background'});
                    break;
                case "http://localhost:3000/app/soldes":
                    this.setState({thirdLiClass: 'background'});
                    break;
                case "http://localhost:3000/app/bot":
                    this.setState({fourthLiClass: 'background'});
                    break;

            }
        };

        return (
            <div className="leftBar">
                <ul>
                    <li className={this.state.firstLiClass}><Link to={"/app/transactions"}>Achat</Link></li>
                    <li className={this.state.secondLiClass}><Link to={"/app/ordres"}>Ordres</Link></li>
                    <li className={this.state.thirdLiClass}><Link to={"/app/soldes"}>Soldes</Link></li>
                    <li className={this.state.fourthLiClass}><Link to={"/app/bot"}>Bot de la semaine</Link></li>
                </ul>
            </div>


        )
    }
}

export default LeftBar;