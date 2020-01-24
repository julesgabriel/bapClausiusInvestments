import React from 'react';
import './App.css';

import Accueil from './views/routes/accueil';
import ServicesRoute from "./views/routes/services";
import TeamRoute from "./views/routes/Team";
import InscriptionRoute from "./views/routes/inscription";

import Questions from "./views/components/questions/questions";
import Cards from "./views/components/questions/cards/cards";
import LogIn from "./views/components/logIn/login";

import Contact from "./views/components/contact/contact";
import LeftBar from "./views/components/leftBar/leftBar";
import Buy from "./views/components/buy/buy";
import Orders from "./views/components/orders/orders";
import Bot from "./views/components/bot/bot";
import Soldes from "./views/components/soldes/soldes";

import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import QuestionsRoute from "./views/routes/questions";
import Connexion from "./views/routes/connexion";
import OrdersRoute from "./views/routes/orders";
import BuyRoutes from "./views/routes/Buy";
import SoldesRoutes from "./views/routes/soldes";
import BotRoute from "./views/routes/bot";
import BlogRoute from "./views/routes/blog";

function App() {
    return (
        <main>
            <Router>
                <Switch>
                    <Route exact path="/" component={Accueil}/>
                    <Route path="/services" component={ServicesRoute}/>
                    <Route path="/equipe" component={TeamRoute}/>
                    <Route path="/inscription" component={InscriptionRoute}/>
                    <Route path="/questionnaire" component={QuestionsRoute}/>
                    <Route path="/application/" component={QuestionsRoute}/>
                    <Route path="/connexion" component={Connexion}/>

                    <Route path="/blog" component={BlogRoute}/>

                    <Route path="/app/transactions" component={OrdersRoute}/>
                    <Route path="/app/ordres" component={BuyRoutes}/>
                    <Route path="/app/soldes" component={SoldesRoutes}/>
                    <Route path="/app/bot" component={BotRoute}/>
                </Switch>
            </Router>
        </main>
    );
}

export default App;
