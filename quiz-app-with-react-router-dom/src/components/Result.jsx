import React from "react";
import { Link } from "react-router-dom";
import "./Result.css";

const Result = (props) => {
  const { quesNo, setQuesNo, result, setResult } = props;
  return (
    <div className="main-container-result">
      <h2 id="result-heading">Result</h2>
      <div className="result-container">
        <h3 id="result-practice-heading">
          {result.correct < 10 ? "You need more practice!" : "Well Done!!"}
        </h3>
        <h1 id="result-score-heading">
          Your score is {(result.correct / 15).toFixed(2) * 100}%
        </h1>
        <div className="result-div">
          <div className="result-total-questions result-sub-divs">
            <h4 id="total-questions">Total number of questions</h4>
            <h4 id="total-number-of-questions">15</h4>
          </div>

          <div className="result-attempted-questions result-sub-divs">
            <h4 id="attempted-questions">Number of attempted questions</h4>
            <h4 id="number-of-attempted-questions">{quesNo}</h4>
          </div>

          <div className="result-correct-answers result-sub-divs">
            <h4 id="correct-answers">Number of correct answers</h4>
            <h4 id="number-of-correct-answers">{result.correct}</h4>
          </div>

          <div className="result-wrong-answers result-sub-divs">
            <h4 id="wrong-answers">Number of wrong answers</h4>
            <h4 id="number-of-wrong-answers">{result.wrong}</h4>
          </div>
        </div>
      </div>
      <div className="result-option-div">
        <Link to={"/quiz"}>
          <button
            id="play-again-btn"
            onClick={() => {
              setQuesNo(0), setResult({ correct: 0, wrong: 0 });
            }}
          >
            Play Again
          </button>
        </Link>
        <Link to={"/"}>
          <button id="back-to-home-btn">Back to home</button>
        </Link>
      </div>
    </div>
  );
};

export default Result;
