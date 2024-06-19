import React, { useState } from 'react';
import './App.css';
import Quiz from './Quiz';
import Welcome from './Welcome';

function App() {
  const [quizStarted, setQuizStarted] = useState(false);

  return (
    <div className="App">
      {quizStarted ? (
        <Quiz />
      ) : (
        <Welcome startQuiz={() => setQuizStarted(true)} />
      )}
    </div>
  );
}

export default App;
