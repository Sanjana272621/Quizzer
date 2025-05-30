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

            <button className = "option">Berlin</button>
            
        </div>
    );
}

export default Quiz;