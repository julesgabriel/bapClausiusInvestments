import React from 'react';
import './buy.css';

import Graph from '../../../assets/illustrations/app/08-achat.svg'


const Buy = props => {
    return (
        <div className="buy">
            <h3>
                Liste d'achats
            </h3>
            <div>
                <div className="list">
                    <div className="listStyle">
                        <li>Crypto 1</li>
                        <li>Crypto 2</li>
                        <li>Crypto 3</li>
                        <li>Crypto 4</li>
                        <li>Crypto 5</li>
                        <li>Crypto 6</li>
                        <li>Crypto 7</li>
                    </div>
                    <img src={Graph} alt="Graphique fluctuation"/>
                </div>
                <div className="abscisse">
                    <li>14/08</li>
                    <li>14/08</li>
                    <li>14/08</li>
                    <li>14/08</li>
                    <li>14/08</li>
                    <li>14/08</li>
                    <li>14/08</li>
                    <li>14/08</li>
                </div>
            </div>
            <div className="values">
                <div className="entry">
                    <span>Valeurs d'entrée</span>
                    <span className="number">{props.enter}</span>
                </div>
                <div className="exit">
                    <span>Valeurs de sortie</span>
                    <span className="number">{props.exit}</span>
                </div>
            </div>
        </div>
    )
};

export default Buy;
