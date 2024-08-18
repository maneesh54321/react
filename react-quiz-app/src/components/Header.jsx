import quizLog from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={quizLog} alt="Quiz Logo Loading..." />
      <h1>React Quiz</h1>
    </header>
  );
}
