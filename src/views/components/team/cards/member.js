import React from 'react';

import './member.css';

const Member = props => {

    return (
        <div className="member">
            <img src={props.img} alt={props.title}/>
            <div className="titleAndContent">
                <h2>{props.title}</h2>
                <h3>Co-fondateur</h3>
                <p>{props.content}</p>
            </div>
        </div>
    )
};

export default Member