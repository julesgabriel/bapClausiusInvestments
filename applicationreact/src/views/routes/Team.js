import React, {Component} from 'react';

import Header from "../../views/components/header/header";
import Team from "../../views/components/team/team";
import Footer from "../../views/components/footer/footer";

class TeamRoute extends Component{
    render() {
        return(
            <div>
                <Header/>
                <Team/>
                <Footer/>
            </div>
        )
    }
}

export default TeamRoute;