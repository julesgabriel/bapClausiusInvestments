import React from 'react';

import './article.css';

const CardArticle = (props) => {
    return(
        <div className="article">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>

    )
};

export default CardArticle;