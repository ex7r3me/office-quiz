import React from 'react';

const Welcome = ({ startQuiz }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="mb-4 text-3xl font-bold">Welcome to The Office Quiz!</h1>
      <p className="mb-4 text-lg">
        Find out which character from The Office you are most like by answering a few questions. Click the button below to start the quiz!
      </p>
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded"
        onClick={startQuiz}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Welcome;
