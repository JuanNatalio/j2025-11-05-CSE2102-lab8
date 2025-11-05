import React, { useState } from 'react';
import quizPageStyle from '../QuizPageStyle';

import my_questions from '../model/basic_questions.json';
import scoreController from '../controllers/scoreController';

const Quiz = ({ onDone }) => {
    const [score, setScore] = useState(0);
    const [count, setCount] = useState(0);

    const incrementScore = () => {
        setScore(prev => prev + 1);
        setCount(prev => prev + 1);
        alert('You are correct!');
    };

    const dontIncrementScore = () => {
        setCount(prev => prev + 1);
        alert('Sorry - not correct');
    };

    const handleSubmit = () => {
        // delegate persistence to the controller
        scoreController.saveScore(score, count);
        // navigate to results page if parent provided an onDone handler
        onDone();
    };

    return (
        <div style={quizPageStyle}>
            <h1>My Questions</h1>
            {my_questions.map((quest) => (
                <div key={quest.id}>
                    <h2>{quest.question}</h2>
                    {quest.answers.map((ans, idx) => (
                        <div key={idx}>
                            <label>
                                <input
                                    type="radio"
                                    name={quest.id}
                                    onClick={ans.isCorrect ? incrementScore : dontIncrementScore}
                                    value={ans.isCorrect}
                                />
                                {ans.answer}
                            </label>
                            <br />
                        </div>
                    ))}
                </div>
            ))}
            <br />
            <button onClick={handleSubmit}>Done</button>
        </div>
    );
};

export default Quiz;