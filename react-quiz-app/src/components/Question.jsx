import { useState } from "react";

import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

export const ANSWERED = "answered";
export const UNANSWERED = "unanswered";
export const CORRECT = "correct";
export const INCORRECT = "incorrect";

export default function Question({ question, onSelectAnswer, onTimeout }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    answerState: UNANSWERED,
  });

  function handleSelectAnswer(ans) {
    setAnswer({
      selectedAnswer: ans,
      answerState: ANSWERED,
    });
    setTimeout(() => {
      setAnswer((prevAnswer) => {
        return {
          ...prevAnswer,
          answerState:
            prevAnswer.selectedAnswer === question.answers[0]
              ? CORRECT
              : INCORRECT,
        };
      });
      setTimeout(() => {
        onSelectAnswer(answer.selectedAnswer);
      }, 2000);
    }, 1000);
  }

  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onTimeout} />
      <h2>{question.text}</h2>
      <Answers
        answers={question.answers}
        answerState={answer.answerState}
        selectedAnswer={answer.selectedAnswer}
        onSelectAnswer={handleSelectAnswer}
      />
    </div>
  );
}
