import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

const App = () => {
  const [quesNo, setQuesNo] = useState(0);
  const [result, setResult] = useState({ correct: 0, wrong: 0 });

  return (
    <>
      <Routes>
        <Route path="/" element={<Home setQuesNo={setQuesNo} />} />
        <Route
          path="/quiz"
          element={
            <Quiz
              quesNo={quesNo}
              setQuesNo={setQuesNo}
              result={result}
              setResult={setResult}
            />
          }
        />
        <Route
          path="/result"
          element={
            <Result
              quesNo={quesNo}
              setQuesNo={setQuesNo}
              result={result}
              setResult={setResult}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
