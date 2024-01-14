import React from "react";
import { Link } from "react-router-dom";
import quizQuestion from "../resources/quizQuestion.json";
import "./Quiz.css";

const Quiz = (props) => {
  const { quesNo, setQuesNo, result, setResult } = props;
  const { question, optionA, optionB, optionC, optionD, answer } =
    quizQuestion[quesNo];

  const updateResult = (isCorrect) => {
    isCorrect ? alert("correct answer") : alert("wrong answer");
    setResult((prevResult) => ({
      correct: isCorrect ? prevResult.correct + 1 : prevResult.correct,
      wrong: isCorrect ? prevResult.wrong : prevResult.wrong + 1,
    }));
    nextQuestion();
  };

  const prevQuestion = () => {
    quesNo > 0 ? setQuesNo(quesNo - 1) : setQuesNo(0);
  };

  const nextQuestion = () => {
    quesNo < 14 ? setQuesNo(quesNo + 1) : setQuesNo(14);
  };

  const reset = () => {
    const confirmation = confirm("Are you sure you want to quit ?");
    confirmation ? setQuesNo(0) : "";
  };

  return (
    <div className="main-container-quiz">
      <div className="quiz-container">
        <h1>Question</h1>
        <p id="question-number">{quesNo + 1} of 15</p>
        <p id="question">{question}</p>
        <div className="option-div">
          <button
            className="options"
            onClick={() => updateResult(optionA === answer)}
          >
            {optionA}
          </button>
          <button
            className="options"
            onClick={() => updateResult(optionB === answer)}
          >
            {optionB}
          </button>
          <button
            className="options"
            onClick={() => updateResult(optionC === answer)}
          >
            {optionC}
          </button>
          <button
            className="options"
            onClick={() => updateResult(optionD === answer)}
          >
            {optionD}
          </button>
        </div>
        <div className="navigation-options">
          <button className="nav-opt" id="previous-btn" onClick={prevQuestion}>
            Previous
          </button>
          <button className="nav-opt" id="next-btn" onClick={nextQuestion}>
            Next
          </button>
          <button className="nav-opt" id="quit-btn" onClick={reset}>
            Quit
          </button>
          <Link
            to={{
              pathname: "/result",
              state: { quesNo: quesNo, result: result },
            }}
          >
            <button className="nav-opt" id="finish-btn">
              Finish
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
