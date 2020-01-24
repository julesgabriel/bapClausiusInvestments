import React, {Component} from 'react';

import Member from "./cards/member";
import './style/team.css';

class Team extends Component {
    render() {
        return (
            <section className="team">
                <div className="contentTeam">
                    <h1>Notre équipe</h1>
                    <p>Aghyles OUGHANEM son perfectionnisme et son ambition en font un a sde la programmation. Partir
                        d’une
                        feuille
                        blanche n’est pas une contrainte pour lui. Hamdi GABTENI spécialisé en finance de marché, il est
                        passionné par
                        le trading depuis de nombreuses années. Il fut fondateur de Vinci Investments, l’association
                        financière
                        du pôle Léonard de Vinci.
                        Les deux fondateurs sont donc étudiants, mais avant tout entrepreneurs dans l’âme. Leur projet
                        est
                        le fruit
                        d’une rencontre par le biais d’un groupe d’amis communs. L’ambition était déjà d’entreprendre,
                        en
                        travaillant
                        sur des projets autres, tel que l’investissement immobilier. Assez rapidement, la vision commune
                        de
                        l’avenir devint
                        plus qu’évidente, basée sur des sujets aussi vastes que la finance de marché, le fonctionnement
                        de
                        ces marchés,
                        et leur passion du trading.
                        Mais une question restait en suspens : pourquoi deux étudiants, futurs actifs, n’ont pas accès à
                        des
                        produits
                        d’investissements intéressants, alternatifs, qui change de l’offre habituelle, s’adaptant aux
                        moyens
                        de chacun ?
                        C’est ainsi qu’est né Clausius, du désordre opaque du marché actuel, nous voulons y amener une
                        offre
                        simple,
                        accessible, sans frais abasourdissants.</p>
                </div>
                <Member title="Oughanem AGHYLES"
                        content="Déterminé et motivé, sa philosophie de vie est la suivante :la discipline et la persévérance représentent le pont entre mes
objectifs et mes réalisations."/>
                <Member title="Gabteni HAMDI"
                        content="Financial market engineering | Fixed Income | FX | IT Région de Paris, France"/>
            </section>
        )
    }
}

export default Team;