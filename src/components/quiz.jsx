import { useState } from 'react';

function Quiz (){
    const questionBank = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "Rome", "London"],
            answer: "Paris"
        },

        {
            question: "What is the capital of Italy?",
            options: ["Paris", "Berlin", "Rome", "London"],
            answer: "Rome"
        }
    ];

    //Used to change the state for rendring new state in react 
    const [optionSelected, setOptionSelected] = useState("None");   // Initialized to None


    function handleSelectOption(option){
        setOptionSelected(option);
    }

    return (
        <div>
            <h2>Question 1</h2>
            <p className = "question"> {questionBank[0].question} </p>
            
            {/*Setting the 4 option buttons and mapping the corresponding options to buttons*/}
            {questionBank[0].options.map((option) => (
            <button className = "option" onClick = {() => handleSelectOption(option)}> {option} </button>
            ))}

            <p>Option selected: {optionSelected}</p>

            {/*Navigation Button*/}
            <div className = "nav-buttons">
                <button>Previous</button>
                <button>Next</button>
            </div>
        </div>
    );  
}

export default Quiz;