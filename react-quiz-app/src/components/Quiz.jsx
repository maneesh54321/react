import { useCallback, useState } from "react";

import quizCompleteLogo from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";
import Question from "./Question";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionsIndex = userAnswers.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }

  const skipQuestion = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  const quizOver = activeQuestionsIndex === QUESTIONS.length;

  if (quizOver) {
    return (
      <div id="summary">
        <img src={quizCompleteLogo} alt="Quiz Completed Logo Loading..." />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionsIndex}
        question={QUESTIONS[activeQuestionsIndex]}
        onSelectAnswer={handleSelectAnswer}
        onTimeout={skipQuestion}
      />
    </div>
  );
}
