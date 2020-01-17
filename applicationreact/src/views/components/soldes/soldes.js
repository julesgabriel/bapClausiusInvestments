import React from 'react';

import './soldes.css';

import SoldesSvg from '../../../assets/illustrations/app/10-solde.svg';

const Soldes = props => {
    return (
        <div className="soldes">
            <div className="contentSoldes">
                <div className="titleSpan">
                    <h3>Soldes</h3>
                    <span>Votre solde est de <b>{props.value}</b></span>
                </div>
                <img src={SoldesSvg} alt="Soldes Graphique"/>
            </div>
        </div>
    )
};

export default Soldes;