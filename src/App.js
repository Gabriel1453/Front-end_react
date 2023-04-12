import { useState } from "react";
import "./App.css";

const questions = [
  {
    questionText: "Qual linguagem de marcação é usada para estruturar o conteúdo de um website?",
    answerOptions: [
      { answerText: "HTML", isCorrect: true },
      { answerText: "CSS", isCorrect: false },
      { answerText: "JavaScript", isCorrect: false },
    ],
  },
  {
    questionText:
      "O que é um framework Front-end?",
    answerOptions: [
      { answerText: "Um tipo de linguagem de programação.", isCorrect: false },
      { answerText: "Um tipo de servidor web.", isCorrect: false },
      { answerText: "Uma biblioteca de código predefinido para facilitar o desenvolvimento de aplicações web.", isCorrect: true },
    ],
  },
  {
    questionText: "Qual é a função do JavaScript em relação ao Front-end?",
    answerOptions: [
      { answerText: "Controlar a aparência e o layout de uma página web.", isCorrect: false },
      { answerText: "Gerenciar a interação com o banco de dados.", isCorrect: false },
      { answerText: " Lidar com a lógica de negócios de uma aplicação web.", isCorrect: true },
    ],
  },
  
];

function App() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          Você pontuou {score} de {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Questão {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>

          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  onClick={() => handleAnswer(answerOption.isCorrect)}
                  key={index}
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}
export default App;