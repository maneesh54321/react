import { useRef } from "react";

import { ANSWERED, CORRECT, INCORRECT, UNANSWERED } from "./Question";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelectAnswer,
}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClasses = "";
        if (isSelected) {
          if (answerState === ANSWERED) {
            cssClasses = "selected";
          } else if (answerState === CORRECT) {
            cssClasses = "correct";
          } else if (answerState === INCORRECT) {
            cssClasses = "wrong";
          }
        }
        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelectAnswer(answer)}
              className={cssClasses}
              disabled={answerState !== UNANSWERED}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
