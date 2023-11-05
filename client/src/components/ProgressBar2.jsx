import React, { useState } from 'react';
import './progressbar2.css';

export default function ProgressBar({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const question = questions[currentQuestionIndex];

  const updateFn = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <div className='container'>
      <div className="progressbar">
        <div
          style={{
            height: "100%",
            width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
            backgroundColor: "#a66cff",
            transition: "width 0.5s"
          }}
        ></div>
        <span className="progressPercent">
          {((currentQuestionIndex + 1) / questions.length) * 100}%
        </span>
      </div>
      <button className="btn" onClick={updateFn}>Next</button>
    </div>
  );
}
