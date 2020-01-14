import React from 'react';
import './card.css'

const Cards = props => {
    return (
        <div className="boxQuestion" id={props.id}>
            <h3>{props.title}</h3>
            <label for={props.label}>A</label>
            <input type="radio" name={props.label} value="A" onClick={props.onClick}/><br/>
            <label for={props.label}>B</label>
            <input type="radio" name={props.label} value="B" onClick={props.onClick}/><br/>
            <label for={props.label}>C</label>
            <input type="radio" name={props.label} value="C" onClick={props.onClick}/><br/>
            <label for={props.label}>D</label>
            <input type="radio" name={props.label} value="D" onClick={props.onClick}/><br/>
        </div>
    )
};

export default Cards;