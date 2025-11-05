import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Quiz from './components/Quiz.js';
import Results from './components/Results';

function App() {
  const [page, setPage] = useState('quiz');

  const goToResults = () => setPage('results');
  const goToQuiz = () => setPage('quiz');

  return (
    <div className="App">
      <header className="App-header">
        {page === 'quiz' ? (
          <Quiz onDone={goToResults} />
        ) : (
          <Results onRestart={goToQuiz} />
        )}
      </header>
    </div>
  );
}

export default App;
