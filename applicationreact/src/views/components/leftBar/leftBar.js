import React, {Component} from 'react';

import './leftBar.css'


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
        this.changeBackground()
    }

    render() {

        this.changeBackground = () => {
            let url = window.location.href;
            console.log(url);

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
                    <li className={this.state.firstLiClass}>Achat</li>
                    <li className={this.state.secondLiClass}>Ordres</li>
                    <li className={this.state.thirdLiClass}>Solde</li>
                    <li className={this.state.fourthLiClass}>Bot de la semaine</li>
                </ul>
            </div>


        )
    }
}

export default LeftBar;