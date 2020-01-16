import React from 'react';
import './App.css';


import Header from "./views/components/header/header";
import Presentation from "./views/components/presentation/presentation";
import Concept from "./views/components/concept/concept";
import Offers from "./views/components/offers/offers";
import CallToSignUp from "./views/components/callToSignUp/callToSignUp";
import Footer from "./views/components/footer/footer";


import Team from "./views/components/team/team";

import SignUp from "./views/components/signUp/signUp";
import Questions from "./views/components/questions/questions";
import Cards from "./views/components/questions/cards/cards";
import LogIn from "./views/components/logIn/login";


function App() {
    return (
        <main>
            <Header/>
            <Presentation/>
            <Concept/>
            <Offers/>
            <CallToSignUp/>
            <Footer/>

        </main>
    );
}

export default App;
