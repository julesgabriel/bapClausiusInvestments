import React, {Component} from 'react';

import Header from "../../views/components/header/header";
import Questions from "../components/questions/questions";
import Footer from "../../views/components/footer/footer";

class QuestionsRoute extends Component{
    render() {
        return(
            <div>
                <Header/>
                <Questions/>
                <Footer/>
            </div>
        )
    }
}

export default QuestionsRoute;