import React, {Component} from 'react';

import Cards from "./cards/cards";
import './questions.css';

const axios = require('axios');

class Questions extends Component {
    submitQuestions;
    handleClick;
    answers;
    calculate;

    constructor(props) {
        super(props);
        this.state = {
            questions: '',
        }
    };

    render() {

        const questionNumber = 20;

        this.answers = [];

        this.handleClick = (event) => {
            let value = event.target.value;
            this.answers.push(value);
        };

        this.calculate = (numOfA, numOfB, numOfC, numOfD) => {

            let multiplicator = 100 / questionNumber;

            let aPercent = numOfA * multiplicator;
            let bPercent = numOfB * multiplicator;
            let cPercent = numOfC * multiplicator;
            let DPercent = numOfD * multiplicator;

            axios.post('api/inscription/', {

                /** insérer les valeurs ici*/

            }).then((response) => {
                console.log(response)
            }).catch((err) => {
                console.log(err.response.data)
            })
        };

        this.submitQuestions = (event) => {
            event.preventDefault();
            let lengthBox = document.getElementsByClassName('boxQuestion').length;
            if (this.answers.length === lengthBox) {
                let numOfA = this.answers.filter((x) => {
                    return x === "A";
                }).length;
                let numOfB = this.answers.filter((x) => {
                    return x === "B";
                }).length;

                let numOfC = this.answers.filter((x) => {
                    return x === "C";
                }).length;
                let numOfD = this.answers.filter((x) => {
                    return x === "D";
                }).length;
                this.calculate(numOfA, numOfB, numOfC, numOfD)

            } else if (this.answers.length > lengthBox) {
                alert("Probleme avec vos réponses, la page va rechargé.");
                document.location.reload(true);
            } else if (this.answers.length < lengthBox) {
                alert("Toutes les réponses n'ont pas été enrégistré !")
            }
        };

        let questions = [];

        window.addEventListener('load', () => {

            for (let i = 1; i <= questionNumber; i++) {
                questions.push(<Cards
                    id={i.toString()}
                    title={"Question " + i + ":"}
                    label={"answer" + i.toString()}
                    onClick={this.handleClick}
                />);
            }
            this.setState({
                questions: questions
            });
        });

        return (
            <section className="questionnaire">
                <form onSubmit={this.submitQuestions}>
                    {this.state.questions}
                    <button type="submit" value="Etape suivante">Etape suivante</button>
                </form>
            </section>
        )
    }
}

export default Questions;
