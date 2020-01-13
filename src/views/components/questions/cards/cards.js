import React from 'react';
import './card.css'

const Cards = props => {
    return (
        <div className="boxQuestion">
            <label>A</label>
            <input type="radio" name="colors" value="A"/>
            <label>B</label>
            <input type="radio" name="colors" value="B"/>
            <label>C</label>
            <input type="radio" name="colors" value="C"/>
            <label>D</label>
            <input type="radio" name="colors" value="D"/>
        </div>
    )
};

export default Cards;