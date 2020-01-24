import React, {Component} from 'react';

import Header from "../../views/components/header/header";

import Footer from "../../views/components/footer/footer";

import BlogView from "../blog/blog";


class BlogRoute extends Component{
    render() {
        return(
            <div>
                <Header/>
                <BlogView/>
                <Footer/>
            </div>
        )
    }
}

export default BlogRoute;