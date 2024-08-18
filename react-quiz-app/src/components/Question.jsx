import { useState } from "react";

import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

export const ANSWERED = "answered";
export const UNANSWERED = "unanswered";
export const CORRECT = "correct";
export const INCORRECT = "wrong";

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
        onSelectAnswer(ans);
      }, 2000);
    }, 1000);
  }

  let timer = 10000;

  if (answer.answerState === ANSWERED) {
    timer = 1000;
  }

  if (answer.answerState === CORRECT || answer.answerState === INCORRECT) {
    timer = 2000;
  }

  function handleTimeout() {
    if (answer.answerState === UNANSWERED) {
      onTimeout();
    }
  }

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={handleTimeout}
        mode={answer.answerState}
      />
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
