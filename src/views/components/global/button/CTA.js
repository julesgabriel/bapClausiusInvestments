import React from 'react';

const CTA = props => {



    return(
        <div>
            <button className={props.className}>{props.content}</button>
        </div>
    )
};

export default CTA