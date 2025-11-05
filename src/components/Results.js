import React from 'react';
import scoreController from '../controllers/scoreController';

const Results = ({ onRestart }) => {
  const { score, count } = scoreController.getScore();

  return (
    <div>
      <h1>Results</h1>
      <p>Your score: {score} / {count}</p>
      <button onClick={() => {
        scoreController.reset();
        if (typeof onRestart === 'function') onRestart();
      }}>Restart Quiz</button>
    </div>
  );
};

export default Results;
