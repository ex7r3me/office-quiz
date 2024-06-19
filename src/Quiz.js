import React, { useState, useEffect } from 'react';
import questionsData from './questions.json';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(questionsData);
  }, []);

  const handleAnswerClick = (character) => {
    setAnswers([...answers, character]);
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const counts = {};
    answers.forEach((answer) => {
      counts[answer] = (counts[answer] || 0) + 1;
    });
    const maxCount = Math.max(...Object.values(counts));
    const mostCommonCharacter = Object.keys(counts).find(
      (character) => counts[character] === maxCount
    );
    setResult(mostCommonCharacter);
  };

  if (result) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="mb-4 text-3xl font-bold">You are {result}!</h1>
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded"
          onClick={() => {
            setAnswers([]);
            setCurrentQuestionIndex(0);
            setResult(null);
          }}
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="mb-4 text-2xl font-bold">{currentQuestion.question}</h1>
      <div className="flex flex-col space-y-2">
        {currentQuestion.answers.map((answer) => (
          <button
            key={answer.text}
            className="px-4 py-2 text-white bg-blue-500 rounded"
            onClick={() => handleAnswerClick(answer.character)}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
