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

    componentDidMount() {
        console.log(localStorage);
    }

    render() {

        const questionNumber = 2;

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
            let dPercent = numOfD * multiplicator;

            console.log(aPercent);
            console.log(bPercent);
            console.log(cPercent);
            console.log(dPercent);

            axios.post('api/inscription/', {

                user: localStorage.getItem('user'),
                password: localStorage.getItem('password'),
                email: localStorage.getItem('email'),
                answers_A: aPercent,
                answers_B: bPercent,
                answers_C: cPercent,
                answers_D: dPercent,

            }).catch((err) => {
                console.log(err.response.data)
            }).then((response) => {
                console.log(response);

            });

            window.location.href = "/questionnaire";
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
