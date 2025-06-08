import { useState } from 'react';
import Results from './results.jsx';

function Quiz (){
    const questionBank = [
        {
            question: "Which layer of the OSI model is responsible for end-to-end communication and error recovery?",
            options: [
                "Data Link Layer", 
                "Network Layer", 
                "Transport Layer", 
                "Session Layer"],

            answer: "Transport Layer"
        },

        {
            question: "What is the primary purpose of the ARP (Address Resolution Protocol)?",
            options: [
                "To assign IP addresses dynamically" , 
                "To resolve domain names to IP addresses" , 
                "To map IP addresses to MAC addresses", 
                "To route packets through different networks"],

            answer: "To map IP addresses to MAC addresses",
        },

        {
            question: " Which of the following IP addresses is a private IP address?",
            options: [
                "8.8.8.8" , 
                "172.20.5.1" , 
                "192.0.2.1", 
                "169.255.255.255"],

            answer: "172.20.5.1",
        }
    ];

    const initialAnswers = [null, null, null];

    //we have a state that keeps track of all the answers
    //Used to change the state for rendring new state in react 

    //userAnswers is a list 
    //setUserAnswers is a react function (but can be named antything)
    const [userAnswers, setUserAnswers] = useState(initialAnswers); //State tracking for answers

    const [currentQuestion, setCurrentQuestion] = useState(0); //State tracking for questions

    const [isQuizFinished, setIsQuizFinished] = useState(false);

    //current selected answer
    const selectedAnswer = userAnswers[currentQuestion];

    function handleSelectOption(option){
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = option;

        setUserAnswers(newUserAnswers);
    }

    function goToNext(){
        if (currentQuestion === questionBank.length -1){
            setIsQuizFinished(true);
        }
        else{
            setCurrentQuestion(currentQuestion +1);
        }
    }

    function goToPrev(){

        if (currentQuestion >0){
            setCurrentQuestion(currentQuestion -1);
        }
    }

    function restartQuiz(){
        setUserAnswers(initialAnswers);
        setCurrentQuestion(0);
        setIsQuizFinished(false);
    }

    if (isQuizFinished === true){
        return <Results userAnswers = {userAnswers} questionBank = {questionBank} restartQuiz = {restartQuiz}/>; //passing props
    }

    return (
        <div>
            <h2>Question {currentQuestion + 1}</h2>
            <p className = "question"> {questionBank[currentQuestion].question} </p>
            
            {/*Setting the 4 option buttons and mapping the corresponding options to buttons*/}
            {questionBank[currentQuestion].options.map((option) => (
            <button 
                className = {"option" + (selectedAnswer === option ? " selected" : "")}
                onClick = {() => handleSelectOption(option)}> {option} 
            </button>

            ))}

            {/*Navigation Button*/}
            <div className = "nav-buttons">
                <button onClick = {goToPrev} disabled = {currentQuestion === 0}>Previous</button>
                <button onClick = {goToNext} disabled = {selectedAnswer === null}>
                    { (currentQuestion === questionBank.length -1 ? "Finish Quiz" : "Next")}
                </button>
            </div>
        </div>
    );  
}

export default Quiz;