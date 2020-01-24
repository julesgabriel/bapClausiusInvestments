import React, {Component} from 'react';
import CardArticle from "./card/article_preview";

class BlogView extends Component{
    render() {
        return(
            <section className="blog">
                <CardArticle title="Article" content="article"/>
                <CardArticle title="Article" content="article"/>
                <CardArticle title="Article" content="article"/>
                <CardArticle title="Article" content="article"/>
                <CardArticle title="Article" content="article"/>
                <CardArticle title="Article" content="article"/>
            </section>
        )
    }
}

export default BlogView;