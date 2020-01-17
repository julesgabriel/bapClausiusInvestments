import React from 'react';
import './order.css';

import WinLoss from '../../../assets/illustrations/app/09-ordresgainperte.svg';
import Portemonnaie from '../../../assets/illustrations/app/09-ordres.svg';


const Orders = props => {
    return (
        <div className="orders">
            <h3>Ordres</h3>
            <div className="contentOrders">
                <div className="winLoss">
                    <img src={WinLoss} alt=""/>
                </div>
                <div className="portemonnaie">
                    <img src={Portemonnaie} alt=""/>
                </div>
            </div>


        </div>
    )
};

export default Orders;