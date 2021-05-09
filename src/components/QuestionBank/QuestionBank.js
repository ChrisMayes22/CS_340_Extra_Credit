import React from 'react';
import questionsData from '../../questions/questionsData';
import './QuestionBank.css'

function QuestionBank(){
    return(
        <main className="app flex-root">
            {questionsData.map((question, i) => {  /* For question in questionsData ...*/
                return (                           /* Render a section with info for each question */
                    <section className="question-section" key={`${i}-question-section`}>
                        <div className="prompt-block question-block">
                            <div className="block-header">QUESTION</div>
                            {question.prompt}
                        </div>
                        {question.answers.map((answer, i) => { /* For answer in question.answer... */
                            return(                            /* Render a block for the answer & a block for the explanation */
                                <div 
                                    className={`answer-block--${answer.explanation[0].toLowerCase() === 'c' ? "correct" : "incorrect"} question-block`} 
                                    key={`${i}-answer-block`}
                                >
                                    <div className="answer-block_answer-text">
                                        <div className="block-header">ANSWER</div>
                                        {answer.answer}
                                    </div>
                                    <div className="answer-block_explanation-text">
                                        <div className="block-header">EXPLANATION</div>
                                        {answer.explanation}
                                    </div>
                                </div>
                            )
                        })}
                    </section>
                )
            })}
        </main>
    )
}

export default QuestionBank