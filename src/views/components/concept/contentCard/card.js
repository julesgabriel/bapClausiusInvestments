import React from "react";
import './card.css'


const Card = props => {
    return(
        <div className={props.class}>
            <img src={props.img} alt={props.alt}/>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
};

export default Card;