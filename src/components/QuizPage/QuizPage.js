
import './QuizPage.css'
import { randomizedQuestions, getRandomIndex } from '../../questions/questionsFunctions'
import { useState, React } from 'react'



function QuizPage() {

  const [memo, setMemo] = useState(randomizedQuestions.memo);
  const [questions] = useState(randomizedQuestions.questions);
  const [currentQuestion, setCurrentQuestion] = useState(randomizedQuestions.questions[randomizedQuestions.index]);
  const [selected, setSelected] = useState([]);

  function getNextQuestion() {
    const [memoCpy, i] = getRandomIndex(questions, memo);
    setMemo(memoCpy);
    setCurrentQuestion(questions[i]);
    setSelected([]);
  }

  function processAnswer(e) {
    const id = parseInt(e.target.id[0]);
    if(selected.includes(id))
      return;
    if(currentQuestion.answers[id].explanation[0].toLowerCase() === "c")
      setSelected(currentQuestion.answers.map((_, i) => i)); // i.e. w/ 4 questions, [0, 1, 2, 3]
    else {
      const selectedCpy = [...selected];
      selectedCpy.push(id);
      setSelected(selectedCpy);
    }
  }

  return (
    <div className="app flex-root">
      <main className="quiz-grid">
        <div className="quiz-grid__border quiz-grid__border--left"></div>
        <div className="quiz-grid__border quiz-grid__border--right"></div>
        <div className="quiz-grid__border quiz-grid__border--top"></div>
        <div className="quiz-grid__border quiz-grid__border--bottom"></div>
        <section className="quiz-grid__prompt">
          <div><h1>{currentQuestion ? currentQuestion.prompt : null}</h1></div>
          <button className="next-button" onClick={() => getNextQuestion()}>Next Question</button>
        </section>


        {currentQuestion.answers.map((_, i) => {
          return (
            //Each answer is a section with the following listener, class and id:
            <section
              onClick={(e) => processAnswer(e)}
              className={[
                `quiz-grid__answer quiz-grid__answer--${i+1}`,
                !selected.includes(i) ? "" 
                : currentQuestion.answers[i].explanation[0].toLowerCase() === "c" ? 
                    "quiz-grid__answer--selected-green" :
                    "quiz-grid__answer--selected-red"
              ].join(" ")}
              id={`${i}-section`}
              key={`key:section-${i}`}
            >

              {/* Answer */}
              <div id={`${i}-answer-div`}>
                <h1 id={`${i}-answer-h1`}>
                  {currentQuestion ? currentQuestion.answers[i].answer : null}
                </h1>
              </div>
              
              {/* Explanation */}
              {selected.includes(i) ? 
                <div id={`${i}-exp-div`}>
                  <h2 id={`${i}-exp-h2`}>
                    {currentQuestion.answers[i].explanation}
                  </h2>
                </div>
              : null}
            </section>)
        })}
      </main>
    </div>
  );
}

export default QuizPage;
