import React, {Component} from 'react';

import Member from "./cards/member";
import './style/team.css';

class Team extends Component {
    render() {
        return (
            <section className="team">
                <div className="contentTeam">
                    <h1>Notre équipe</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis neque lorem, mattis porttitor nunc
                        vitae, convallis auctor velit. Suspendisse potenti. Morbi sagittis magna vitae augue semper
                        bibendum. Nullam bibendum elit nibh, et placerat augue aliquet ut. Aliquam luctus libero quis
                        sapien
                        porta luctus. Ut eu ultricies lacus. Nunc metus quam, blandit eu gravida ac, feugiat vitae ante.

                        Pellentesque vulputate congue odio, vehicula elementum lectus placerat pretium. Etiam
                        condimentum mi
                        a convallis cursus. Donec id egestas lorem, vitae ultricies dui. Curabitur mollis elit nec
                        fringilla
                        luctus. Phasellus bibendum luctus ante non dictum. Cras non ipsum id arcu consequat faucibus vel
                        id
                        urna. Integer aliquam risus sit amet dolor ornare, nec gravida neque ultricies. Praesent vitae
                        purus
                        gravida, lacinia est non, viverra ex.</p>
                </div>
                <Member title="Oughanem AGHYLES"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis neque lorem, mattis porttitor nunc vitae, convallis auctor velit. Suspendisse potenti. Morbi sagittis magna vitae augue semper bibendum. Nullam bibendum elit nibh, et placerat augue aliquet ut. Aliquam luctus libero quis sapien porta luctus. Ut eu ultricies lacus. Nunc metus quam, blandit eu gravida ac, feugiat vitae ante."/>
                <Member title="Gabteni HAMDI"
                        content="Pellentesque vulputate congue odio, vehicula elementum lectus placerat pretium. Etiam condimentum mi a convallis cursus. Donec id egestas lorem, vitae ultricies dui. Curabitur mollis elit nec fringilla luctus. Phasellus bibendum luctus ante non dictum. Cras non ipsum id arcu consequat faucibus vel id urna. Integer aliquam risus sit amet dolor ornare, nec gravida neque ultricies. Praesent vitae purus gravida, lacinia est non, viverra ex."/>
            </section>
        )
    }
}

export default Team;