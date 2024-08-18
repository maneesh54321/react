import { useState } from "react";

import QUESTIONS from "../questions";
import quizCompleteLogo from "../assets/quiz-complete.png";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionsIndex = userAnswers.length;

  const quizOver = activeQuestionsIndex === QUESTIONS.length;
  if (quizOver) {
    return (
      <div id="summary">
        <img src={quizCompleteLogo} alt="Quiz Completed Logo Loading..." />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionsIndex].answers];
  shuffledAnswers.sort((a, b) => Math.random() - 0.5);

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionsIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => {
            return (
              <li key={answer} className="answer">
                <button onClick={() => handleSelectAnswer(answer)}>
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
