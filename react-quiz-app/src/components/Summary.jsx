import quizCompleteLogo from "../assets/quiz-complete.png";
import questions from "../questions";

import QUESTIONS from "../questions";

export default function Summary({ userAnswers }) {
  const skipped = userAnswers.filter((ans) => ans === null).length;
  const answeredCorrectly = QUESTIONS.filter(
    (que, idx) => que.answers[0] === userAnswers[idx]
  ).length;
  const answeredIncorrectly = questions.length - skipped - answeredCorrectly;

  return (
    <div id="summary">
      <img src={quizCompleteLogo} alt="Quiz Completed Logo Loading..." />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">
            {Number(skipped / questions.length).toLocaleString(undefined, {
              style: "percent",
              maximumFractionDigits: 0,
            })}
          </span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">
            {Number(answeredCorrectly / questions.length).toLocaleString(
              undefined,
              {
                style: "percent",
                maximumFractionDigits: 0,
              }
            )}
          </span>
          <span className="text">anwered correctly</span>
        </p>
        <p>
          <span className="number">
            {Number(answeredIncorrectly / questions.length).toLocaleString(
              undefined,
              {
                style: "percent",
                maximumFractionDigits: 0,
              }
            )}
          </span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((ans, idx) => {
          let cssClass = "user-answer";
          if (ans === null) {
            cssClass += " skipped";
          } else if (ans === QUESTIONS[idx].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={idx}>
              <h3>{idx + 1}</h3>
              <p className="question">{QUESTIONS[idx].text}</p>
              <p className={cssClass}>{ans === null ? "skipped" : ans}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
