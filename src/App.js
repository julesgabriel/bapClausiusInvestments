import React from 'react';
import './App.css';
import Header from "./views/components/header/header";
import Presentation from "./views/components/presentation/presentation";
import Concept from "./views/components/concept/concept";
import Offers from "./views/components/offers/offers";


function App() {
    return (
        <main>
            <Header/>
            <Presentation/>
            <Concept/>
            <Offers/>

        </main>
    );
}

export default App;
