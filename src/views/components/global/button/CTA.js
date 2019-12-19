import React from 'react';

const CTA = props => {



    return(
        <div>
            <button id={props.id} onClick={props.onClick} className={props.className}>{props.content}</button>
        </div>
    )
};

export default CTA