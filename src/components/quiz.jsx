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

    return (
        <div>
            <h2>Question 1</h2>
            <p className = "question"> {questionBank[0].question} </p>
            
            {/*Setting the 4 option buttons and mapping the corresponding options to buttons*/}
            {questionBank[0].options.map((option) => (
            <button className = "option"> {option} </button>
            ))}

            {/*Navigation Button*/}
            <div className = "nav-buttons">
                <button>Previous</button>
                <button>Next</button>
            </div>
        </div>
    );
}

export default Quiz;